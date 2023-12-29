import BlogSectionBlogs from '@/components/blog-sections/BlogSectionBlogs'
import BlogSectionCourse from '@/components/blog-sections/BlogSectionCourse'
import BlogSectionJobs from '@/components/blog-sections/BlogSectionJobs'
import CardheadingsInternship from '@/components/card-headings/CardheadingsInternship'
import Categorypreviews1 from '@/components/category-previews/Categorypreviews1'
import Dividers1 from '@/components/dividers/Dividers1'
import Heroes1 from '@/components/heroes/Heroes1'
import LogoClouds1 from '@/components/logo-clouds/LogoClouds1'
import Testimonials1 from '@/components/testimonials/Testimonials1'

export default function Home() {
  return (
    <main>
      <Heroes1 />
      <LogoClouds1 />
      <Categorypreviews1 />
      <BlogSectionCourse />
      <Dividers1 />
      <BlogSectionJobs />
      <Testimonials1 />
      <BlogSectionBlogs/>
    </main>
  )
}
