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
            <div className="flex flex-wrap justify-evenly gap-20 border-red-500 border-8">
            {skillsData
            .filter((category) => category.skills.some((skill) => generateRange().includes(skill.proficiency)))
            .map((category) => (
                <div key={category.category}>
                    <h2 className="text-xl font-bold mb-2 underline">{category.category}</h2>
                    <ul>
                    {category.skills
                        .filter((skill) => generateRange().includes(skill.proficiency))
                        .map((skill) => (
                        <li key={skill.name} className="mb-2">
                            <a href={skill.href} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                {skill.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
            <br></br>
        </>
    )
}

export default Skills