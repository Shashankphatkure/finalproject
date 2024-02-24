import Link from "next/link"
import Bookmark from "../buttons/bookmark"
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://dxdpmgjttftkiqtlgcng.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function getData() {
  // Fetch data from the courses table
  const { data, error } = await supabase
  .from('courses')
  .select(`
    *,
    instructor:instructors (
      instructorname,
      instructorimage
    )
  `)

  if (error) {
    console.error('Error fetching data:', error)
    return []
  }

  return data
}


function renderStars(rating) {
  const stars = [];
  for (let i =  0; i < rating; i++) {
    stars.push(<svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0  0  20  20"><path d="M10  15.27L16.18  21l-1.64-7.03L22  9.24l-7.19-.61L10  2  7.19  8.63  0  9.24l5.46  4.73L3.82  21z"></path></svg>);
  }
  return (
    <div className="flex items-center">
      {stars}
    </div>
  );
}


export default async function Coursecardenrolled() {
  const data = await getData()
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-4 space-y-10 lg:space-y-10">
            {data.map((item) => (
              <article key={item.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                
                <Link href={`/course/view/${item.id}`}>

                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  </Link>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                  {parseFloat(item.duration).toFixed(1)} Hours 
                    <a
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {item.category}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
  <div className="flex items-center ">
    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      <a>
        <span className="absolute inset-0" />
        {item.title}
      </a>
    </h3>
    <div className="ml-2">
      {renderStars(item.rating)}
    </div>
  </div>
  <div className="mt-4 flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: "25%"}}></div>
</div>
</div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                    <img src={item.instructor ? item.instructor.instructorimage : 'default-instructor-image-url'} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            {item.author}
                          </a>
                        </p>
                        <p className="text-gray-600">{item.instructor ? item.instructor.instructorname : 'Instructor not specified'}</p>
                        <p className="text-gray-600 font-bold" >{item.language} | Certificate</p>
                      </div>
                      <Bookmark text="Open Course"/>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
