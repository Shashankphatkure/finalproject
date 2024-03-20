"use client";
import supabase from "../../../utils/supabaseClient"; // Adjust the import path as necessary
import GoogleAiCheck from "@/components/googleai/googleairesponse";
import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Filterreviews from "@/components/reviews/reviews";
import BlogSectionCourse from "@/components/blog-sections/BlogSectionCourse";
import DashboardHeaderInstructor from "@/components/dashboard-headers/DashboardheadersInstructor";
import Teamsections from "@/components/team-sections/team-sections1";
const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

  const totalSections = item.sections?.length || 0;
  const totalLectures =
    item.sections?.reduce(
      (total, section) => total + (section.lectures?.length || 0),
      0
    ) || 0;

  return (
    <>
      <div>
        {/* <br />
      <GoogleAiCheck question={item.description} />

      <br /> */}
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                <strong>{item.category}</strong>_ / {item.difficulty} /{" "}
                {item.language}
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {item.title}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  ${item.price}
                </p>

                <div className="ml-4 border-l border-gray-300 pl-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                    </div>
                    <p className="ml-2 text-sm text-gray-500">
                      {reviews.totalCount} reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">
                  {item.small_description}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-green-500">What you'll learn</p>
              </div>

              <div className="mt-6 flex flex-col">
                {item.what_you_learn.map((learnItem, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-2 text-sm text-base text-gray-500 ">
                      {learnItem}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-2 text-center">Preview this course ▶️</p>

            {/* Sections and Lectures */}
            <div className="mt-14 text-xl">Course content</div>
            <div className="">
              {totalSections} sections • {totalLectures} lectures
            </div>
            <br></br>
            <div className="mt-2">
              {item.sections?.map((section) => (
                <div key={section.id} className="mb-4">
                  <h2 className="text-xl font-bold">{section.title}</h2>
                  {section.lectures?.map((lecture) => (
                    <div key={lecture.id} className="mt-2">
                      <h3 className="text-lg">{lecture.title}</h3>
                      <p className="text-sm text-gray-500">
                        {lecture.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <div>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Buy this course
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-gray-500 hover:text-gray-700">
                  Lifetime Guarantee
                </span>
              </a>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-red-500">Requirements</p>
            </div>

            <div className="mt-6 flex flex-col">
              {item.what_you_learn.map((learnItem, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-base text-gray-500 ">
                    {learnItem}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-blue-500">Who this course is for:</p>
            </div>

            <div className="mt-6 flex flex-col">
              {item.what_you_learn.map((learnItem, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-base text-gray-500 ">
                    {learnItem}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-6">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Description
              </h1>
            </div>
            <div className="mt-4 space-y-6">
              <div
                className="text-base text-gray-500"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        </div>
      </div>
      <Teamsections
        twitterlink={item.instructor.twitter}
        linkedinlink={item.instructor.linkedin}
        instructorimage={item.instructor.instructorimage}
        instructorname={item.instructor.instructorname}
        instructorrole={item.instructor.role}
        instructordescription={item.instructor.instructordescription}
      />
      <Filterreviews />
      <BlogSectionCourse />
    </>
  );
}
