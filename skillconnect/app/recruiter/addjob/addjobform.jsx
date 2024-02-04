import React from 'react'

const Addjobform = () => {
  
  return (
    <div class="relative">

      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Fill in the form
        </h2>

        <form method="POST" action="https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/jobs?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY">
          <div class="mt-6 grid gap-4 lg:gap-6">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label for="hs-firstname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Title</label>
                <input type="text" name="title" id="title" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Experience</label>
                <input type="text" name="experience" id="experience" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              
            </div>


            <div>
              <label for="hs-work-email-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Location</label>
              <input type="text" name="location" id="location" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
            </div>

            <div>
                <label htmlFor="jobtype" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Job Type</label>
                <select name="jobtype" id="jobtype" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                </select>
              </div>

          
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label for="hs-company-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Openings</label>
                <input type="text" name="openings" id="openings" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>
    
              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Salary</label>
                <input type="text" name="salary" id="salary" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              

              <div>
                <label htmlFor="skills" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Skills</label>
                <textarea name="skills" id="skills" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></textarea>
              </div>
            </div>
         

            <div>
              <label for="hs-about-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Description</label>
              <textarea id="description" name="description" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></textarea>
            </div>
          </div>
         

         
          <div class="mt-3 flex">
            <div class="flex">
              <input name="remember-me" type="checkbox" class="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"></input>
            </div>
            <div class="ms-3">
              <label for="remember-me" class="text-sm text-gray-600 dark:text-gray-400">By submitting this form I have read and acknowledged the <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">Privacy policy</a></label>
            </div>
          </div>
          

          <div class="mt-6 grid">
            <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send inquiry</button>
          </div>
        </form>

        <div class="mt-3 text-center">
          <p class="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default Addjobform