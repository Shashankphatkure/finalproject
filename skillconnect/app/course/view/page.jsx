"use client"

import React, { useEffect } from 'react';

const courselayout = () => {
    useEffect(() => {
        // Check if the current path is /course/view
        if (window.location.pathname === '/course/view') {
            // Redirect to the homepage
            window.location.href = '/course/dashboard';
        }
    }, []);

    return (
        <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <img
          className="mx-auto h-10 w-auto sm:h-12"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 text-indigo-600">Skillconnect</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Redirecting to your courses</h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Protected route
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only"></h2>
          
          <div className="mt-10 flex justify-center">
            <a href="/" className="text-sm font-semibold leading-6 text-indigo-600">
              <span aria-hidden="true"></span>
              Back to homepage
            </a>
          </div>
        </div>
      </main>
    );
};

export default courselayout;