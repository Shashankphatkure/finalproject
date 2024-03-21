"use client";
import supabase from "../../../../utils/supabaseClient";
import Applicationshell1 from "@/components/application-shells/Applicationshell1";
import React from "react";

async function getData(id) {
  // Fetch blog data along with the user's information using a single query
  const { data: courses, error } = await supabase
    .from("courses")
    .select(
      `
      *,
      instructor:instructors (
        instructorname,
        instructorimage,
        instructordescription,
        role,
        linkedin,
        twitter
      ),
      sections: sections (
        *,
        lectures: lectures (
          *
        )
      )
    `
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }

  return courses;
}

export default async function Page({ params }) {
  const item = await getData(params.id);

  console.log(item);
  return (
    <div>
      <Applicationshell1
        title={item.title}
        language={item.language}
        description={item.description}
        instructorname={item.instructor.instructorname}
      />
    </div>
  );
}
