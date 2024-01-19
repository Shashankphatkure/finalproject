/* after form submission the page redirects to api this needs to be fixed */

import Pageheadings3 from '@/components/page-headings/pageheadings3'
import React from 'react'

const page = () => {
    return (
        <div>
        <form method="POST" action="https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/courses?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY">    
        <div style={{ marginTop: '20px', marginBottom: '40px' }}>
            <Pageheadings3 />
        </div>
        <div style={{ marginTop: '70px', marginBottom: '20px', marginLeft: '70px', marginRight: '70px' }}>
        <div className="isolate -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600" style={{ marginTop: '5px', marginBottom: '5px' }} >
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Course name
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Jane Smith"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600" style={{ marginTop: '5px', marginBottom: '5px' }}>
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Course description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Head of Tomfoolery"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600" style={{ marginTop: '5px', marginBottom: '5px' }} >
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Head of Tomfoolery"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600" style={{ marginTop: '5px', marginBottom: '5px' }} >
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Difficulty
          </label>
          <input
            type="text"
            name="difficulty"
            id="difficulty"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Head of Tomfoolery"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600" style={{ marginTop: '5px', marginBottom: '5px' }} >
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Head of Tomfoolery"
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600" style={{ marginTop: '5px', marginBottom: '5px' }} >
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            id="duration"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Head of Tomfoolery"
          />
        </div>
      </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '20px', marginRight: '20px' }}
        type="submit"
        className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Submit
      </button>
      
      </div>
      </form>
      </div>
      

    )
}

export default page