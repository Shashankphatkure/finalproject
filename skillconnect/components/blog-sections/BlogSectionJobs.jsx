async function getData() {
  const res = await fetch('https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/jobs?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY', { cache: 'no-store' })
  const data = await res.json()
  return data.slice(0, 3)
}

export default async function BlogSectionJobs() {
  const jobOpenings = await getData()

  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find your dream job
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
            Search for jobs by keyword, location, or company.
            </p>
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
              alt=""
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href={opening.href}>
                        {opening.title}
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">{opening.salary}$ Per Year</dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <a href="https://finalproject-drab.vercel.app/jobs" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start your search now! <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
