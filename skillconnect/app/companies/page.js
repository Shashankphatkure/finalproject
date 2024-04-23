import Coursecard from "@/components/Important-cards/Coursecard";
import BlogSectionCourse from "@/components/blog-sections/BlogSectionCourse";
import CategoryfilterCourse from "@/components/category-filters/categoryfiltercourse";
import CategoryfilterJobs from "@/components/category-filters/categoryfilterjobs";
import CategoryfilterJobsAPI from "@/components/category-filters/categoryfilterjobsAPI";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogSectionCourse />
      <CategoryfilterJobsAPI />
    </div>
  );
};

export default page;
