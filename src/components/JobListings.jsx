import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'
const JobListings = () => {
  const recentJobs=jobs.slice(0,3);
  return (
     <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="mb-6 font-bold text-3xl text-center text-indigo-500">
          Browse Jobs
        </h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">

          {recentJobs.map(job=> <JobListing key={job.id} job={job} />
          )}

        </div>
      </div>
    </section>
  )
}

export default JobListings