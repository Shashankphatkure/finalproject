import Coursecard from '@/components/Important-cards/Coursecard'
import BlogSectionCourse from '@/components/blog-sections/BlogSectionCourse'
import CategoryfilterCourse from '@/components/category-filters/categoryfiltercourse'
import React from 'react'

const page = () => {
  return (
    <div>
      <BlogSectionCourse />
      <CategoryfilterCourse/>
    </div>
  )
}

export default page


