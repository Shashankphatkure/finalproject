'use client'
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dxdpmgjttftkiqtlgcng.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Addinternshipform = () => {

  const [description, setDescription] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Convert skills to array
    const skillsArray = skills_needed.value.split(',');
    const who_can_applyArray = who_can_apply.value.split(',');
    const perksArray = perks.value.split(',');
    const responsibilitiesArray = responsibilities.value.split(',');

    // Use Supabase client to insert data
    const { data, error } = await supabase
      .from('internships')
      .insert([
        { 
          title: title.value,
          location: location.value,
          duration: duration.value,
          stipend: stipend.value,
          description: description,
          skills_needed: skillsArray,
          who_can_apply: who_can_applyArray,
          perks: perksArray,
          opening: opening.value,
          responsibilities: responsibilitiesArray,
        },
      ]);

    if (error) {
      console.error(error);
    } else {
      console.log(data);
      event.target.reset();
    }
  }

  useEffect(() => {
    if (formRef.current) {
      formRef.current.addEventListener('submit', handleSubmit);
    }
    return () => {
      if (formRef.current) {
        formRef.current.removeEventListener('submit', handleSubmit);
      }
    };
  }, [formRef]);

    return (
    <div className="relative">

      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Fill in the form
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-6 grid gap-4 lg:gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label for="hs-firstname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Title</label>
                <input type="text" name="title" id="title" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Location</label>
                <input type="text" name="location" id="location" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              
            </div>


            <div>
              <label for="hs-work-email-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Duration</label>
              <input type="text" name="duration" id="duration" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label for="hs-company-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Stipend</label>
                <input type="text" name="stipend" id="stipend" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Opening</label>
                <input type="text" name="opening" id="opening" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Skills</label>
                <input type="text" name="skills_needed" id="skills_needed" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Who can apply</label>
                <input type="text" name="who_can_apply" id="who_can_apply" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Perks</label>
                <input type="text" name="perks" id="perks" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Responsibilities</label>
                <input type="text" name="responsibilities" id="responsibilities" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>


            </div>
         

            <div>
  <label htmlFor="description" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Description</label>
  <ReactQuill
    id="description"
    name="description"
    value={description}
    onChange={setDescription}
    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
    modules={{
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        
        [{ 'header':  1 }, { 'header':  2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'direction': 'rtl' }],
        [{ 'header': [1,  2,  3,  4,  5,  6, false] }],
        [{ 'align': [] }]
      ]
    }}
    formats={[
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]}
  />
</div>
          </div>
         

         
          <div className="mt-3 flex">
            <div className="ms-3">
              <label for="remember-me" className="text-sm text-gray-600 dark:text-gray-400">By submitting this form I have read and acknowledged the <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">Privacy policy</a></label>
            </div>
          </div>
          

          <div className="mt-6 grid">
            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit Job Post</button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
          You will start receiving candidates in next 24 Hours.
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default Addinternshipform