'use client'

import React, { useState } from 'react'
import LineBar from './LineBar'
import skillsData from '@/data/skillsData'

const Skills = () => {
  const [rangeValues, setRangeValues] = useState<[number, number]>([1, 5])

  const generateRange = (): number[] => {
    const lower = rangeValues[0]
    const upper = rangeValues[1]
    const range: number[] = []
    for (let i = lower; i <= upper; i++) {
      range.push(i)
    }
    return range
  }

  return (
    <>
      <br></br>
      <h1 className="text-3xl font-bold">Skills</h1>
      <LineBar values={rangeValues} rangeArray={generateRange()} onChange={setRangeValues} />
      <div className="flex flex-wrap justify-center gap-6 border-red-400">
        {skillsData
          .filter((category) =>
            category.skills.some((skill) => generateRange().includes(skill.proficiency))
          )
          .map((category) => (
            <div key={category.category}>
              <div className="inline-block min-h-24 w-80 rounded-lg bg-slate-200 pb-5 dark:bg-slate-800">
                <div className="flex items-center justify-around">
                  <category.icon className="m-4 text-2xl" />
                  <h2 className="m-4 text-xl font-bold underline">{category.category}</h2>
                </div>
                <ul className="flex flex-wrap justify-center border-yellow-400">
                  {category.skills
                    .filter((skill) => generateRange().includes(skill.proficiency))
                    .map((skill) => (
                      <li key={skill.name} className="mr-2 flex">
                        <a
                          href={skill.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="m-1 rounded-full border-x-4 
                                            border-primary-400
                                            bg-primary-400 text-white 
                                            hover:border-primary-700 hover:bg-primary-700 
                                            dark:border-primary-900 dark:bg-primary-900 
                                            dark:hover:border-primary-600 dark:hover:bg-primary-600"
                        >
                          {skill.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
      <br></br>
    </>
  )
}

export default Skills
