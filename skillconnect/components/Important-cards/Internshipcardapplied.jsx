import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Bookmark from "../buttons/bookmark";

// Initialize Supabase client
const supabaseUrl = "https://dxdpmgjttftkiqtlgcng.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getData() {
  // Fetch data from the jobs table
  const { data, error } = await supabase.from("internships").select(`
    *,
    company:company!public_internships_company_fkey (
       companyname,
       companylogo,
       rating
     )
  `);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
}

function renderStars(rating) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg
        key={i}
        className="w-3 h-3 text-yellow-500"
        fill="currentColor"
        viewBox="0  0  20  20"
      >
        <path d="M10  15.27L16.18  21l-1.64-7.03L22  9.24l-7.19-.61L10  2  7.19  8.63  0  9.24l5.46  4.73L3.82  21z"></path>
      </svg>
    );
  }
  return <div className="flex items-center">{stars}</div>;
}

export default async function Internshipcard() {
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
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex items-center">
                      <a className="flex-grow">
                        <span className="absolute inset-0" />
                        {item.title}
                      </a>
                      <div className="ml-2">
                        {renderStars(
                          item.company
                            ? item.company.rating
                            : "Company not specified"
                        )}
                      </div>
                    </h3>
                    <h3 className="text-md font-semibold leading-6 text-gray-600 group-hover:text-gray-600">
                      <a>
                        <span className="absolute inset-0" />
                        {item.company
                          ? item.company.companyname
                          : "Company not specified"}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 flex border-t border-gray-900/5 pt-3">
                    <div className="relative flex items-center gap-x-4">
                      <div className="relative lg:aspect-square lg:w-10 lg:shrink-0">
                        <img
                          src={
                            item.company
                              ? item.company.companylogo
                              : "default-company-logo-url"
                          }
                          alt=""
                          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="text-sm leading-6">
                        <p className="flex font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            Applied Date
                          </a>
                        </p>
                        <p className="text-gray-600">{item.start_date}</p>
                      </div>
                      <div className="text-sm leading-6">
                        <p className="flex font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            Duration
                          </a>
                        </p>
                        <p className="text-gray-600">{item.duration}</p>
                      </div>
                      <div className="text-sm leading-6">
                        <p className="flex font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            Stipend
                          </a>
                        </p>
                        <p className="text-gray-600">{item.stipend}</p>
                      </div>
                      <div className="text-sm leading-6">
                        <p className="flex font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            Location
                          </a>
                        </p>
                        <p className="text-gray-600">{item.location}</p>
                      </div>
                      <Link href={`/internship/${item.id}`}>
                        <Bookmark text="Applied on" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 pt-3 text-xs">
                    Skills
                    {item.skills_needed.map((skills_needed, index) => (
                      <span
                        key={index}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-3 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {skills_needed}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-x-3 pt-3 text-xs">
                    Perks
                    {item.perks.map((perks, index) => (
                      <span
                        key={index}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-3 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {perks}
                      </span>
                    ))}
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
