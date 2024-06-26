import Link from "next/link";

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://dxdpmgjttftkiqtlgcng.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getData() {
  // Fetch data from the blogs table
  const { data, error } = await supabase
    .from("courses")
    .select(
      `
    *,
    instructor:instructors (
      instructorname,
      instructorimage,
      role
    )
  `
    )
    .limit(3);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
}

export default async function BlogSectionCourse() {
  const data = await getData();
  return (
    <div className="bg-white py-8 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Upskill and reskill
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn new skills from top experts in a variety of fields.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  {parseFloat(post.duration).toFixed(1)} Hours
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/course/${post.id}`} legacyBehavior>
                      <a>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <Link href={`/course/${post.id}`} legacyBehavior>
                  <a>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={post.instructor.instructorimage}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-100"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <span className="absolute inset-0" />
                          {post.instructor.instructorname}
                        </p>
                        <p className="text-gray-600">{post.instructor.role}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
