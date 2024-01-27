import BlogSectionReviews from "@/components/blog-sections/BlogSectionReviews"
import Datadisplay1 from "@/components/data-displays/data-display1"
import DescriptionList from "@/components/descriptionlist/page"
import Benefitsperks from "@/components/lists/benefitsperks"
import Jobslist from "@/components/lists/jobslist"
import Pageheadings2 from "@/components/page-headings/pageheadings2"

export async function generateStaticParams() {
    const res = await fetch('https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/internships?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY', { cache: 'no-store' })
    const data = await res.json()
   
    return data.map((course) => ({
      id: data.id,
    }))
  }
  
  async function getData(id) {
    const res = await fetch(`https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/internships?id=eq.${id}&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY`, { cache: 'no-store' })
    const data = await res.json()
    return data
  }
    
  export default async function Page({ params }) {
    const landingcourse = await getData(params.id)
    
    return (<div>
            {landingcourse.map((item) =>  (
               <div key={item.id}>
              <div>
    <div className="flex min-h-full flex-col">

      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <main className="flex-2">{/* Main area */}
        <Pageheadings2 title={item.title} companyid={item.companyid} stipend={item.stipend} duration={item.duration} start_date={item.start_date}/>
        <div className="mt-6" />
        <DescriptionList opening={item.opening} companyid={item.companyid} responsibilities={item.responsibilities} who_can_apply={item.who_can_apply} />
        </main>

        <aside className="flex-1 sticky top-8 hidden w-96 shrink-0 xl:block">{/* Right column area */}</aside>
        <div>
        <Benefitsperks />
        <div>
        <Datadisplay1 />
        </div>
        <div className="mt-6" />
        <Jobslist />
        </div>
         
      </div>
      <div>
      <main>{/* Main area */}
        <BlogSectionReviews />
        </main>
      </div>
    </div>
    </div>

              <br/>
  
            </div>
    ))}</div>
  )}
