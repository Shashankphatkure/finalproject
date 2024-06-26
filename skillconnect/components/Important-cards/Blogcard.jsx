import Link from "next/link";
import Bookmark from "../buttons/bookmark";

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

export default async function Blogcard() {
  const data = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-4 space-y-10 lg:space-y-10">
            {data.map((item) => (
              <article
                key={item.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <Link href={`/blogs/${item.id}`}>
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </Link>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={item.updateddate} className="text-gray-500">
                      {item.updateddate}
                    </time>
                    <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {item.category}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a>
                        <span className="absolute inset-0" />
                        {item.title}
                      </a>
                    </h3>
                    <p
                      className="mt-5 text-sm leading-6 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: item.description.slice(0, 300) + "...",
                      }}
                    ></p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={
                          item.user.imageUrlAuthor || "default-author-image-url"
                        }
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            {item.user.username}
                          </a>
                        </p>
                        <p className="text-gray-600">{item.userid}</p>
                      </div>
                      <Link href={`/blogs/${item.id}`}>
                        <Bookmark text="Read article" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
