// components/ApplicationModal.js
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dxdpmgjttftkiqtlgcng.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const ApplicationModal = ({ isOpen, onClose, onSubmit, jobid }) => {
  const { user, isLoading } = useUser();
  const [cvLink, setCvLink] = React.useState("");
  const [coverNote, setCoverNote] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("jobapplications") // Use the name of your table
      .insert([
        {
          cvlink: cvLink,
          coverletter: coverNote,
          jobid: jobid,
          userid: user.sub,
          emailaddress: user.email,
          profilephoto: user.picture,
          name: user.name,
          status: "submitted",
        }, // Match the column names in your table
      ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      // Optionally, you can still call the onSubmit prop if needed
      onSubmit({ cvLink, coverNote });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cvLink"
                >
                  CV Link
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cvLink"
                  type="text"
                  placeholder="Enter CV Link"
                  value={cvLink}
                  onChange={(e) => setCvLink(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="coverNote"
                >
                  Cover Note
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="coverNote"
                  placeholder="Enter your cover note"
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
