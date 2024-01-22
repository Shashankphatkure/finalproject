import Coursecard from '@/components/Important-cards/Coursecard'
import BlogSectionCourse from '@/components/blog-sections/BlogSectionCourse'
import CategoryfilterCourse from '@/components/category-filters/categoryfiltercourse'
import CategoryfilterJobs from '@/components/category-filters/categoryfilterjobs'
import React from 'react'

const page = () => {
  return (
    <div>
      <BlogSectionCourse />
      <CategoryfilterJobs/>
    </div>
  )
}

export default page


