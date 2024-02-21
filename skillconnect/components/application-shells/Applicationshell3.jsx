import { BellIcon } from '@heroicons/react/24/outline'
import DescriptionList from '../descriptionlist/page'
import Pageheadings2 from '../page-headings/pageheadings2'
import Jobslist from '../lists/jobslist'
import Benefitsperks from '../lists/benefitsperks'
import BlogSectionReviews from '../blog-sections/BlogSectionReviews'
import Badges from '../badges/badges'
import Datadisplay1 from '../data-displays/data-display1'

export default function Applicationshell3() {
  return (
    
    <div>
    <div className="flex min-h-full flex-col">

      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <main className="flex-2">{/* Main area */}
        <Pageheadings2 />
        <div className="mt-6" />
        <DescriptionList />
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
  )
}
