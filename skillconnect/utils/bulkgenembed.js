import { createClient } from "@supabase/supabase-js";
import { pipeline } from "@xenova/transformers";

const supabaseUrl = "https://dxdpmgjttftkiqtlgcng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY"; // Replace with your actual Supabase key

const supabase = createClient(supabaseUrl, supabaseKey);

async function generateAndStoreEmbeddingsForAll() {
  try {
    // Initialize the pipeline for feature extraction
    const generateEmbedding = await pipeline(
      "feature-extraction",
      "Supabase/gte-small"
    );

    // Fetch rows that need embeddings
    const { data: rows, error } = await supabase
      .from("internships")
      .select("id, description")
      .is("embedding", null); // Use 'is' instead of 'eq' for NULL checks

    if (error) {
      console.error("Error fetching rows:", error);
      return;
    }

    // Generate embeddings for each row and update the database
    for (const row of rows) {
      const output = await generateEmbedding(row.description, {
        pooling: "mean",
        normalize: true,
      });

      const embedding = Array.from(output.data);

      const { error: updateError } = await supabase
        .from("internships")
        .update({ embedding })
        .eq("id", row.id);

      if (updateError) {
        console.error(`Error updating row ${row.id}:`, updateError);
      } else {
        console.log(`Embedding generated and stored for row ${row.id}`);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the function to generate and store embeddings for all rows
generateAndStoreEmbeddingsForAll();
