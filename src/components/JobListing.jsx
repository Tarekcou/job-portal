import React from 'react'

const JobListing = ({job}) => {
  return (
    <div className="relative bg-white shadow-md rounded-xl">
            <div className="p-4">
              <div className="mb-6">
                <div className="my-2 text-gray-600">{job.type}</div>
                <h3 className="font-bold text-xl">{job.title}</h3>
              </div>

              <div className="mb-5">
               {job.description}
              </div>

              <h3 className="mb-2 text-indigo-500">{job.salary}/Year</h3>

              <div className="border-gray-100 mb-5 border"></div>

              <div className="flex lg:flex-row flex-col justify-between mb-4">
                <div className="mb-3 text-orange-700">
                  <i className="text-lg fa-location-dot fa-solid"></i>
                 {job.location}
                </div>
                <a
                  href={`/job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg h-[36px] text-center text-sm text-white"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
  )
}

export default JobListing