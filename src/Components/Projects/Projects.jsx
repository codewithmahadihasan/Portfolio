import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useEffect } from 'react'
import { useState } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    // setLoader(true)
    fetch('https://protfolio-backend-loneliness-mahadi.vercel.app/project')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
      })
    setLoader(false)
  })

  if (loader) {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <div
        id="projects"
        className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <h1 className="text-4xl pb-14 pt-6 text-center font-bold">Projects</h1>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {projects.map((project) => (
            <Link
              to={`/project/${project?._id}`}
              key={project?.id}
              project={project}
            >
              <div className="overflow-hidden hover:shadow-xl hover:shadow-teal-400 transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  src={project?.image}
                  className="object-cover w-full h-64"
                  alt=""
                />
                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <p
                      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title="traveling"
                    >
                      Published Date
                    </p>
                    <span className="text-gray-600">— {project?.date}</span>
                  </p>
                  <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    {project.name}
                  </a>
                  <p className="mb-2 text-gray-700">
                    {project?.ditals?.slice(0, 80)}..
                  </p>
                  <Link
                    to={`/project/${project?._id}`}
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <Link to="/allProject">All Project</Link> */}
    </section>
  )
}

export default Projects
