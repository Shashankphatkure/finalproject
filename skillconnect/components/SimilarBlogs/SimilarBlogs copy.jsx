import Link from "next/link";

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://dxdpmgjttftkiqtlgcng.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getData() {
  // Fetch data from the blogs table
  const { data, error } = await supabase.from("blogs").select(`
    *,
    user:users (
      username,
      imageUrlAuthor
    )
  `);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
}

export default async function SimilarBlogsBAK() {
  const data = await getData();

  return (
    <div className="space-y-6">
      {data.map((item) => (
        <div key={item.id} className="group flex items-center gap-x-6">
          <Link href={`/blogs/${item.id}`} key={item.id} legacyBehavior>
            <a className="group flex items-center gap-x-6">
              <article className="relative isolate flex flex-col gap-8 lg:flex-row mt-6">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                  {item.title}
                </span>

                <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>
              </article>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
