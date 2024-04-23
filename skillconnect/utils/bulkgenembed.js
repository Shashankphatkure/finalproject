import { createClient } from "@supabase/supabase-js";
import { pipeline } from "@xenova/transformers";

const supabaseUrl = "https://flmgwpthmwsxrpzgyeju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsbWd3cHRobXdzeHJwemd5ZWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4ODQyMjEsImV4cCI6MjAyNzQ2MDIyMX0.ufsmipPJkMooGHFEx-vjtwFGydL0M_icFFYIQoKgov8"; // Replace with your actual Supabase key

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
      .from("blogs")
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
        .from("blogs")
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
