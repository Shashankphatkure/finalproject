import BlogSectionBlogs from '@/components/blog-sections/BlogSectionBlogs'
import CategoryfilterBlog from '@/components/category-filters/categoryfilterblogs'
import React from 'react'

const page = () => {
  return (
    <div>
      <BlogSectionBlogs />
      <CategoryfilterBlog/>
    </div>
  )
}

export default page


