async function getData() {
  const res = await fetch('https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/courses?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY', { cache: 'no-store' })
  return res.json()
}



export default async function Internshipcard() {
  const data = await getData()
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-4 space-y-10 lg:space-y-10">
            {data.map((item) => (
              <article key={item.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a>
                        <span className="absolute inset-0" />{item.title}
                      </a>
                    </h3>
                    <h3 className="text-md font-semibold leading-6 text-gray-600 group-hover:text-gray-600">
                      <a>
                        <span className="absolute inset-0" />{item.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                  <div className="mt-3 flex border-t border-gray-900/5 pt-3">
                    <div className="relative flex items-center gap-x-4">
                      <div className="relative lg:aspect-square lg:w-10 lg:shrink-0">
                      <img
                      src={item.imageUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="text-sm leading-6">
                        <p className="flex font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            Start Date
                          </a>
                        </p>
                        <p className="text-gray-600">{item.duration}</p>
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
                        <p className="text-gray-600">{item.duration}</p>
                      </div>
                      <div className="text-sm leading-6">
                        <p className="flex font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            Location
                          </a>
                        </p>
                        <p className="text-gray-600">{item.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 pt-3 text-xs">
                    Skills
                    <a
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {item.category}
                    </a>
                  </div>
                  <div className="flex items-center gap-x-3 pt-3 text-xs">
                    Perks
                    <a
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {item.category}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
