import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
     <nav className="border-indigo-500 bg-indigo-700 border-b">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <div className="flex flex-1 justify-center md:justify-start items-center md:items-stretch">
            {/* <!-- Logo --> */}
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="/index.html"
            >
              <img className="w-auto h-10" src={logo} alt="React Jobs" />
              <span className="md:block hidden ml-2 font-bold text-2xl text-white">
                React Jobs
              </span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="bg-black hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white"
                >
                  Home
                </a>
                <a
                  href="/jobs.html"
                  className="hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white"
                >
                  Jobs
                </a>
                <a
                  href="/add-job.html"
                  className="hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white"
                >
                  Add Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar