"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from "react";
import ApplicationModal from "../ApplicationModal/Applicationmodal";
import ApplicationModalInternship from "../ApplicationModal/Applicationmodalinternship";

const user = {
  name: "Rebecca Nicholas",
  role: "Product Designer",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export default function Pageheadings2({
  title,
  companyid,
  start_date,
  duration,
  stipend,
  jobid,
}) {
  const { user: authUser, isLoading } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const stats = [
    { label: "Start Date : ", value: start_date },
    { label: "Duration : ", value: duration },
    { label: "Stipend : ", value: stipend },
  ];

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
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">Welcome back,</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {title}
              </p>
              <p className="text-sm font-medium text-gray-600">{companyid}</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={handleApplyClick}
            >
              Apply for internship
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-center text-sm font-medium"
          >
            <span className="text-gray-900">{stat.label}</span>{" "}
            <span className="text-gray-600">{stat.value}</span>
          </div>
        ))}
      </div>
      <ApplicationModalInternship
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitApplication}
        jobid={jobid}
      />
    </div>
  );
}
