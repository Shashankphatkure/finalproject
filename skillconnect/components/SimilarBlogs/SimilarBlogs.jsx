"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

// Initialize Supabase client
const supabaseUrl = "https://dxdpmgjttftkiqtlgcng.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to perform similarity search based on a specific document ID
async function searchSimilarDocumentsById(documentId) {
  try {
    // Fetch the embedding for the document ID
    const { data: document, error } = await supabase
      .from("blogs")
      .select("embedding")
      .eq("id", documentId)
      .single();

    if (error) {
      console.error("Error retrieving document:", error);
      return;
    }

    const queryEmbedding = document.embedding;

    // Call the match_blogs function to get the IDs of similar documents
    const { data: documentIds, error: searchError } = await supabase.rpc(
      "match_blogs",
      {
        query_embedding: queryEmbedding,
        match_threshold: 0.5,
        match_count: 5,
      }
    );

    if (searchError) {
      console.error("Error searching documents:", searchError);
      return;
    }

    // Fetch the title and thumbnail for each document ID
    const documents = await Promise.all(
      documentIds.map(async (docId) => {
        const { data: doc, error: fetchError } = await supabase
          .from("blogs")
          .select("title, thumbnail, description, id")
          .eq("id", docId.id)
          .single();

        if (fetchError) {
          console.error("Error fetching document details:", fetchError);
          return null;
        }

        return doc;
      })
    );

    // Filter out any null values (in case of errors fetching details)
    return documents.filter((doc) => doc !== null);
  } catch (error) {
    console.error("Error executing search:", error);
  }
}

export default function SimilarBlogsBAK() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentId = 2; // The ID of the document you're interested in
        const fetchedDocuments = await searchSimilarDocumentsById(documentId);
        setDocuments(fetchedDocuments);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {documents.map((document, index) => (
        <div key={index}>
          <a href={`/blogs/${document.id}`} key={document.id} legacyBehavior>
            <a className="group flex items-center gap-x-6">
              <article className="relative isolate flex flex-col gap-8 lg:flex-row mt-6">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                  {document.title}
                </span>

                <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                    src={document.thumbnail}
                    alt={document.title}
                  />
                </div>
              </article>
            </a>
          </a>
        </div>
      ))}
    </div>
  );
}
