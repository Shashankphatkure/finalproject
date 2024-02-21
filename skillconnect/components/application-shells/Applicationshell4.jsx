import Jobslist from '../lists/jobslist'
import Featurelist from '../feature-section/feature-list'
import Stackedlistcoursesections from '../lists/stackedlistcoursesections'
import LogoClouds2 from '../logo-clouds/LogoClouds2'
import Testimonials2 from '../testimonials/testimonials2'
import Filterreviews from '../reviews/reviews'
import BlogSectionCourse from '../blog-sections/BlogSectionCourse'
import Teamsections from '../team-sections/team-sections1'
import Coursevideo2 from '../CourseVideo/Coursevideo2'
import BuyButton from '../buttons/buybutton'
import Bookmark from '../buttons/bookmark'
import Pageheadings3 from '../page-headings/pageheadings3'


export default function Applicationshell4() {
  return (
    
    <div>
    <main>
      <Pageheadings3/>
    </main>
    <div>
    <div className="flex min-h-full flex-col">
      <div className="mx-auto flex w-full max-w-10xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <main>
        <Featurelist />
        <div className="mt-6" />
        <LogoClouds2  />
        <div className="mt-6" />
        <Stackedlistcoursesections  />
        <div className="mt-6" />
        <Testimonials2  />
        <div className="mt-6" />
        </main>
        <aside className="flex-1 sticky top-8 hidden w-96 shrink-0 xl:block">{/* Right column area */}</aside>
        <div>
        <Coursevideo2 />
        <div className="mt-4" />
        <Bookmark />
        <div className="mt-4" />
        <BuyButton />
        <div className="mt-2" />
        <h1 style={{ textAlign: 'center', fontSize: '0.8rem' }}>30-Day Money-Back Guarantee</h1>
        <h1 style={{ textAlign: 'center', fontSize: '0.8rem' }}>Full Lifetime Access</h1>
        <div className="mt-6" />
        <Jobslist />
        </div>
      </div>
      <div>
      <main>
        <Teamsections />
        <Filterreviews />
        <BlogSectionCourse />
        </main>
      </div>
    </div>
    </div>
    </div>
  )
}
