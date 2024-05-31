'use client'

import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { useState } from 'react'

const filterOptions = ['All', 'In Progress', 'Completed', 'Planned']

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.status === selectedFilter)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Check out my featured projects here!
          </p>
          <div className="flex space-x-4">
            {filterOptions.map((option) => (
              <button
                key={option}
                className={`rounded-lg px-4 py-2 ${
                  selectedFilter === option
                    ? 'bg-primary-600 text-white dark:bg-primary-500'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setSelectedFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {filteredProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                status={d.status}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
