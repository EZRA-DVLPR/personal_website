'use client'

import React, { useState } from 'react';
import LineBar from "./LineBar"
import skillsData from '@/data/skillsData';

const Skills = () => {
    const [rangeValues, setRangeValues] = useState<[number, number]>([1, 5]);

    const generateRange = (): number[] => {
        const lower = rangeValues[0];
        const upper = rangeValues[1];
        const range: number[] = [];
        for (let i = lower; i <= upper; i++) {
            range.push(i);
        }
        return range;
    };

    return (
        <>
            <br></br>
            <h1 className='text-3xl font-bold'>Skills</h1>
            <LineBar values={rangeValues} rangeArray={generateRange()} onChange={setRangeValues} />
            <div className="flex flex-wrap justify-center gap-6 border-red-400">
                {skillsData
                    .filter((category) => category.skills.some((skill) => generateRange().includes(skill.proficiency)))
                    .map((category) => (
                        <div key={category.category}>
                            <div className='rounded-lg bg-sky-200 dark:bg-slate-800 inline-block w-80 min-h-24 pb-5'>
                                <div className='flex items-center justify-around'>
                                    <category.icon className='m-4' />
                                    <h2 className="text-xl font-bold underline m-4">{category.category}</h2>
                                </div>
                                <ul className='flex flex-wrap justify-center border-yellow-400'>
                                    {category.skills
                                        .filter((skill) => generateRange().includes(skill.proficiency))
                                        .map((skill) => (
                                            <li key={skill.name} className="mr-2 flex">
                                                <a href={skill.href} target="_blank" rel="noopener noreferrer"
                                                    className="rounded-full border-x-4 m-1 
                                            text-amber-600 dark:text-sky-300 
                                            bg-amber-200 dark:bg-amber-700 
                                            border-amber-200 dark:border-amber-700 
                                            hover:bg-amber-50 dark:hover:bg-amber-900 
                                            hover:border-amber-50 dark:hover:border-amber-900">
                                                    {skill.name}
                                                </a>
                                            </li>
                                        ))
                                    }
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