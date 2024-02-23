import BlogSectionEvents from '@/components/blog-sections/BlogSectionEvents'
import CategoryfilterEvent from '@/components/category-filters/categoryfilterevent'
import React from 'react'

const page = () => {
  return (
    <div>
      <BlogSectionEvents />
      <CategoryfilterEvent/>
    </div>
  )
}

export default page


