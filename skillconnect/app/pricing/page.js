import React from 'react'

const page = () => {
  return (
    <div>
     <>
  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
    <div className="overflow-hidden">
      
      {/* Hero */}
      <div className="relative">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-48 start-0 -z-[1]"
        >
          <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20" />
          <div className="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60" />
        </div>
        {/* End Gradients */}
        <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">
              Simple, transparent pricing
            </h2>
            <p className="mt-2 lg:text-lg text-gray-800 dark:text-gray-200">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </div>
          {/* End Title */}
          
          {/* Grid */}
          <div className="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Free
              </h4>
              <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
                Free
              </span>
              <p className="mt-2 text-sm text-gray-500">
                Get started with basic features
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    1 user
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-violet-700">
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">
                  Most popular
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Startup
              </h4>
              <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
                $39
              </span>
              <p className="mt-2 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    2 users
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
              >
                Get started
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Team
              </h4>
              <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
                $89
              </span>
              <p className="mt-2 text-sm text-gray-500">
                Everything you need for a growing business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    5 users
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Enterprise
              </h4>
              <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
                $149
              </span>
              <p className="mt-2 text-sm text-gray-500">
                Advanced features for scaling your business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    10 users
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
              </a>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
          {/* Title */}
          <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mt-10 md:mt-14 mb-6 lg:mt-24">
            <h2 className="text-gray-600 dark:text-gray-400">
              Trusted by Open Source, enterprise, and more than 99,000 of you
            </h2>
          </div>
          {/* End Title */}
          {/* Clients */}
          <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
            <svg
              className="size-16 md:size-20 lg:size-24 mx-auto sm:mx-0 text-gray-500"
              enableBackground="new 0 0 2499 614"
              viewBox="0 0 2499 614"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="size-16 md:size-20 lg:size-24 mx-auto sm:mx-0 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
              width={2500}
              height={607}
            >
              <path
                d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="size-16 md:size-20 lg:size-24 mx-auto sm:mx-0 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width={2500}
              height={2500}
              viewBox="0 0 192.756 192.756"
            >
              <g fillRule="evenodd" clipRule="evenodd">
                <path
                  fill="currentColor"
                  className="fill-white dark:fill-slate-900"
                  d="M0 0h192.756v192.756H0V0z"
                />
                <path
                  fill="currentColor"
                  d="M26.795 87.807h14.783l5.172 9.058 5.997-9.058h13.749l-11.085 15.484 11.879 17.018H52.747l-5.997-10.467-7.073 10.467H26.179l11.816-17.018-11.2-15.484z"
                />
                <path
                  d="M101.412 107.146h-24.97c.219 2.006.763 3.488 1.619 4.471 1.202 1.41 2.779 2.109 4.712 2.109a7.036 7.036 0 0 0 3.489-.918c.68-.387 1.4-1.066 2.173-2.049l12.275 1.129c-1.881 3.27-4.137 5.611-6.791 7.031-2.653 1.41-6.457 2.121-11.419 2.121-4.305 0-7.689-.605-10.166-1.818-2.466-1.211-4.513-3.145-6.132-5.787-1.62-2.645-2.435-5.746-2.435-9.32 0-5.076 1.63-9.193 4.879-12.328 3.26-3.145 7.752-4.723 13.488-4.723 4.649 0 8.327.711 11.012 2.121 2.695 1.4 4.753 3.448 6.153 6.112 1.41 2.675 2.111 6.153 2.111 10.437v1.412h.002zm-12.663-5.966c-.25-2.414-.898-4.137-1.943-5.172-1.055-1.044-2.434-1.566-4.148-1.566-1.984 0-3.562.794-4.753 2.361-.752.982-1.233 2.434-1.431 4.377h12.275zM99.312 87.807h12.975l6.311 20.591 6.519-20.591h12.578l-13.81 32.502h-11.043l-13.53-32.502zM135.021 104.146c0-4.951 1.672-9.047 5.016-12.254 3.354-3.218 7.867-4.827 13.561-4.827 6.51 0 11.43 1.891 14.752 5.663 2.674 3.04 4.012 6.792 4.012 11.241 0 4.994-1.66 9.09-4.973 12.287-3.312 3.186-7.898 4.785-13.76 4.785-5.225 0-9.445-1.326-12.674-3.98-3.959-3.282-5.934-7.586-5.934-12.915zm12.485-.031c0 2.904.586 5.047 1.766 6.426 1.172 1.389 2.645 2.09 4.42 2.09 1.797 0 3.27-.689 4.42-2.059 1.16-1.369 1.734-3.553 1.734-6.582 0-2.811-.586-4.91-1.746-6.289-1.158-1.369-2.6-2.059-4.314-2.059-1.818 0-3.322.699-4.502 2.09-1.182 1.401-1.778 3.532-1.778 6.383zM184.99 57.755c2.717 0 4.932 2.215 4.932 4.931s-2.215 4.931-4.932 4.931c-2.715 0-4.93-2.215-4.93-4.931s2.215-4.931 4.93-4.931z"
                  fill="currentColor"
                />
                <path
                  d="M150.203 109.527c16.982-10.41 25.166-25.221 25.748-32.324.674-8.224-5.473-18.187-27.666-18.353-26.6.278-60.919 12.209-89.721 27.793H69.21c24.344-11.771 51.807-20.527 77.159-21.219 22.186-.605 23.475 11.5 23.283 15.339-.275 5.48-5.754 18.081-19.449 28.764zM48.762 92.414c-.934.578-1.86 1.159-2.777 1.744l.768 1.345 2.009-3.089zm-13.617 9.08C19.125 113.037 7.169 125.074 2.834 135c5.936-8.084 16.68-17.801 30.391-27.371l3.113-4.484-1.193-1.651z"
                  fill="currentColor"
                />
                <path
                  d="M159.783 102.467c3.523-3.102 6.449-6.33 8.801-9.467-.078-.091-.154-.182-.234-.272a15.087 15.087 0 0 0-2.041-1.925c-1.613 3.067-3.852 6.455-6.803 9.891.129.546.221 1.138.277 1.773z"
                  fill="currentColor"
                  className="fill-white dark:fill-slate-900"
                />
              </g>
            </svg>
            <svg
              className="size-16 md:size-20 lg:size-24 mx-auto sm:mx-0 text-gray-500"
              viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003"
              xmlns="http://www.w3.org/2000/svg"
              width={2500}
              height={610}
            >
              <path
                d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836"
                fill="currentColor"
              />
            </svg>
          </div>
          {/* End Clients */}
        </div>
        <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full dark:border-violet-900/60" />
        <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed border-violet-200 rounded-full opacity-80 dark:border-violet-900/60" />
        <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed border-violet-200 rounded-full opacity-60 dark:border-violet-900/60" />
        <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed border-violet-200 rounded-full opacity-40 dark:border-violet-900/60" />
      </div>
      {/* End Hero */}
    </div>
    {/* Comparison Table */}
    <div className="relative">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
            Compare plans
          </h2>
        </div>
        {/* Header */}
        <div className="hidden lg:block sticky top-0 start-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
          {/* Grid */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2">
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Features
              </span>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Free
              </span>
              <p className="mt-2 text-sm text-gray-500">Free forever</p>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $39 per month billed annually
              </p>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Team
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $89 per month billed annually
              </p>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $149 per month billed annually
              </p>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Header */}
        {/* Section */}
        <div className="space-y-4 lg:space-y-0">
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                General
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Number of seats
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  1
                </span>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  Up to 3
                </span>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  Up to 10
                </span>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  Unlimited
                </span>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Storage
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  15 GB
                </span>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  1 TB
                </span>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  15 TB
                </span>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  Unlimited
                </span>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Email sharing
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Any time, anywhere access
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
        </div>
        {/* End Section */}
        {/* Section */}
        <div className="mt-6 space-y-4 lg:space-y-0">
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Financial data
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Open/High/Low/Close
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Price-volume difference indicator
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
        </div>
        {/* End Section */}
        {/* Section */}
        <div className="mt-6 space-y-4 lg:space-y-0">
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                On-chain data
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Network growth
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Average token age consumed
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Exchange flow
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Total ERC20 exchange funds flow
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Transaction volume
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Total circulation (beta)
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Velocity of tokens (beta)
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                ETH gas used
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
        </div>
        {/* End Section */}
        {/* Section */}
        <div className="mt-6 space-y-4 lg:space-y-0">
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Social data
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
            {/* Item */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Dev activity
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Topic search
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
          {/* List */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* Item */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Relative social dominance
              </span>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </div>
            </li>
            {/* End Item */}
            {/* Item */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  className="flex-shrink-0 size-5 text-violet-600 dark:text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </li>
            {/* End Item */}
          </ul>
          {/* End List */}
        </div>
        {/* End Section */}
        {/* Header */}
        <div className="hidden lg:block mt-6">
          {/* Grid */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2"></div>
            {/* End Col */}
            <div className="col-span-1">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
              </a>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
              </a>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
              </a>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Get started
              </a>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Header */}
        {/* Button Group */}
        <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need a custom plan?
          </p>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Contact us
          </button>
        </div>
        {/* End Button Group */}
      </div>
    </div>
    {/* End Comparison Table */}
    {/* Testimonials */}
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:pt-16 lg:pb-28 mx-auto">
        {/* Gradients */}
        <div aria-hidden="true" className="flex absolute start-0 -z-[1]">
          <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20" />
        </div>
        {/* End Gradients */}
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
          <div className="hidden lg:block lg:col-span-2">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
          <div className="lg:col-span-4">
            {/* Blockquote */}
            <blockquote>
              <svg
                className="w-24 h-auto mb-4"
                viewBox="-0.3 0 320.3999999999999 99.9"
                xmlns="http://www.w3.org/2000/svg"
                width={2500}
                height={779}
              >
                <path
                  d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z"
                  fill="#ff5a5f"
                />
              </svg>
              <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
                To say that switching to Preline has been life-changing is an
                understatement. My business has tripled and I got my life back.
              </p>
              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="lg:hidden flex-shrink-0">
                    <img
                      className="size-12 rounded-full"
                      src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ms-4 lg:ms-0">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Nicole Grazioso
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Head of Finance
                    </p>
                  </div>
                </div>
              </footer>
            </blockquote>
            {/* End Blockquote */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
    {/* End Testimonials */}
    {/* FAQ */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid md:grid-cols-6 gap-6">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="md:col-span-4">
          {/* Accordion */}
          <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
            <div
              className="hs-accordion pb-3 active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                Can I cancel at anytime?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, you can cancel anytime no questions are asked while you
                  cancel but we would highly appreciate if you will give us some
                  feedback.
                </p>
              </div>
            </div>
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                My team has credits. How do we use them?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  Once your team signs up for a subscription plan. This is where
                  we sit down, grab a cup of coffee and dial in the details.
                </p>
              </div>
            </div>
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                How does Preline's pricing work?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  Our subscriptions are tiered. Understanding the task at hand
                  and ironing out the wrinkles is key.
                </p>
              </div>
            </div>
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
              >
                How secure is Preline?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  Protecting the data you trust to Preline is our first
                  priority. This part is really crucial in keeping the project
                  in line to completion.
                </p>
              </div>
            </div>
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
              >
                How do I get access to a theme I purchased?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  If you lose the link for a theme you purchased, don't panic!
                  We've got you covered. You can login to your account, tap your
                  avatar in the upper right corner, and tap Purchases. If you
                  didn't create a login or can't remember the information, you
                  can use our handy Redownload page, just remember to use the
                  same email you originally made your purchases with.
                </p>
              </div>
            </div>
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-six"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
              >
                Upgrade License Type
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  There may be times when you need to upgrade your license from
                  the original type you purchased and we have a solution that
                  ensures you can apply your original purchase cost to the new
                  license purchase.
                </p>
              </div>
            </div>
          </div>
          {/* End Accordion */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
    {/* End FAQ */}
  </main>

  
</>

    </div>
  )
}

export default page