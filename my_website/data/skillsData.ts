interface Skill {
    name: string;
    proficiency: number;                    // 1-5 indicating proficiency level
    href: string;                           // Link to external page
}

interface SkillCategory {
    category: string;                       // Name of the skill category
    skills: Skill[];                        // Array of skills associated with the category
}

const skillsData: SkillCategory[] = [
    {
        category: 'Machine Learning',
        skills: [
            {
                name: 'Scikit-learn',
                proficiency: 4,
                href: 'https://scikit-learn.org/'
            },
            {
                name: 'Tensorflow',
                proficiency: 3,
                href: 'https://www.tensorflow.org/'
            }
        ]
    },
        {
        category: 'Web Development',
        skills: [
            {
                name: 'React',
                proficiency: 5,
                href: 'https://reactjs.org/'
            },
            {
                name: 'Next.js',
                proficiency: 4,
                href: 'https://nextjs.org/'
            }
        ]
    },
    {
    category: 'Data Analysis',
        skills: [
            {
                name: 'Pandas',
                proficiency: 5,
                href: 'https://pandas.pydata.org/'
            },
            {
                name: 'NumPy',
                proficiency: 4,
                href: 'https://numpy.org/'
            }
        ]
    }
];
  
  export default skillsData;
  