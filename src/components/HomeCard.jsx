import React from 'react'
import Card from './Card'

const HomeCard = () => {
  return (
     <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg">
          <div >
            <Card bg='bg-indigo-100'>
              <h2 className="font-bold text-2xl">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black hover:bg-gray-700 px-4 py-2 rounded-lg text-white"
            >
              Browse Jobs
            </a>
            </Card>
          </div>
          <div >
           <Card>
             <h2 className="font-bold text-2xl">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-white"
            >
              Add Job
            </a>
           </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCard