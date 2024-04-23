"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Bookmark from "../buttons/bookmark";
import moment from "moment"; // Import Moment.js

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=26b1bef9&app_key=94d8738c4245871afe83e2ccb5e59385"
      );
      const data = await response.json();
      setJobs(data.results);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="job">
          <div className="mt-10">
            <div className="group relative">
              <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex items-center">
                <a className="flex-grow">
                  <span className="absolute inset-0" />
                  {job.title}
                </a>
              </h3>
              <h3 className="text-md font-semibold leading-6 text-gray-600 group-hover:text-gray-600"></h3>
              <a>
                <span className="absolute inset-0" />
                {job.company.display_name}
              </a>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {job.description}
              </p>
            </div>
            <div className="mt-3 flex border-t border-gray-900/5 pt-3">
              <div className="relative flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="flex font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      Contract
                    </a>
                  </p>
                  <p className="text-gray-600">{job.contract_type}</p>
                </div>
                <div className="text-sm leading-6">
                  <p className="flex font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      Salary
                    </a>
                  </p>
                  <p className="text-gray-600">
                    {job.salary_min}$ - {job.salary_max}$
                  </p>
                </div>
                <div className="text-sm leading-6">
                  <p className="flex font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      Location
                    </a>
                  </p>
                  <p className="text-gray-600">{job.location.display_name}</p>
                </div>
                <div className="text-sm leading-6">
                  <p className="flex font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      Date added
                    </a>
                  </p>
                  <p className="text-gray-600">
                    {moment(job.created).format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                </div>
                <Link href={job.redirect_url}>
                  <Bookmark text="Apply Now" />
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pt-3 text-xs">
              {
                <div className="relative z-10 rounded-full bg-gray-50 px-3 py-3 font-medium text-gray-600 hover:bg-gray-100">
                  {job.category.label}
                </div>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
