import { useUser } from "@auth0/nextjs-auth0/client";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import ApplicationModalReviews from "../ApplicationModal/Applicationmodalreview";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ApplicationModalQuiz from "../ApplicationModal/Applicationmodalquiz";

export default function DescriptionListVideo({
  language,
  description,
  instructorname,
  courseid,
  title,
}) {
  const { user: authUser, isLoading } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenquiz, setIsModalOpenquiz] = useState(false);
  const router = useRouter();

  const handleQuizClick = () => {
    setIsModalOpenquiz(true);
  };

  const handleQuizCloseModal = () => {
    setIsModalOpenquiz(false);
  };

  const handleSubmitQuiz = (applicationData) => {
    // Handle form submission here
    // This is where you would send the data to Supabase
    console.log(applicationData);
    setIsModalOpenquiz(false);
  };

  const handleApplyClick = () => {
    if (!isLoading && !authUser) {
      router.push("/api/auth/login");
      return null; // or a loading indicator
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitApplication = (applicationData) => {
    // Handle form submission here
    // This is where you would send the data to Supabase
    console.log(applicationData);
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-hidden bg-white shadow">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Language : {language}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Lesson Description Here
        </p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">
              Instructor Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {instructorname}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">
              Course Description
            </dt>
            <dd
              className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              dangerouslySetInnerHTML={{ __html: description }}
            ></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Ai Features</dt>
            <dd className="mt-1  text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="flex space-x-4">
                <a
                  href="https://skillchat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Ai Chat
                  </button>
                </a>{" "}
                <a
                  href="https://skillconotes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    CoNotes
                  </button>
                </a>{" "}
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={handleQuizClick}
                >
                  Ai Quiz
                </button>{" "}
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={handleApplyClick}
                >
                  Review Course
                </button>{" "}
                <ApplicationModalReviews
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onSubmit={handleSubmitApplication}
                  courseid={courseid}
                />
                <ApplicationModalQuiz
                  isOpen={isModalOpenquiz}
                  onClose={handleQuizCloseModal}
                  onSubmit={handleSubmitQuiz}
                  title={title}
                />
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200 shadow"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
