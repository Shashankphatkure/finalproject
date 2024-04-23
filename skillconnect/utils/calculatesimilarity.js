// Import necessary modules
import { pipeline } from "@xenova/transformers";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://flmgwpthmwsxrpzgyeju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsbWd3cHRobXdzeHJwemd5ZWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4ODQyMjEsImV4cCI6MjAyNzQ2MDIyMX0.ufsmipPJkMooGHFEx-vjtwFGydL0M_icFFYIQoKgov8"; // Replace with your actual Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to perform similarity search based on a specific document ID
async function searchSimilarDocumentsById(documentId) {
  try {
    // Retrieve the embedding of the document with the specified ID
    const { data: document, error } = await supabase
      .from("blogs")
      .select("embedding")
      .eq("id", documentId)
      .single();

    if (error) {
      console.error("Error retrieving document:", error);
      return;
    }

    // Assuming the document's embedding is available and is an array
    const queryEmbedding = document.embedding;

    // Perform similarity search
    const { data: documents, error: searchError } = await supabase.rpc(
      "match_documents",
      {
        query_embedding: queryEmbedding,
        match_threshold: 0.78,
        match_count: 3,
      }
    );

    if (searchError) {
      console.error("Error searching documents:", searchError);
    } else {
      console.log("Similar documents found:", documents);
    }
  } catch (error) {
    console.error("Error executing search:", error);
  }
}

// Example usage
const title = "python tutorial";
const body = "streamlit and django course tutorial";

// Generate and store embedding
// generateAndStoreEmbedding(title, body);

// Perform similarity search based on a specific document ID
const documentId = 2; // The ID of the document you're interested in
searchSimilarDocumentsById(documentId);
