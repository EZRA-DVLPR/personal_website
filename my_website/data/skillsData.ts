import { FaPython } from 'react-icons/fa';

import { IconType } from 'react-icons';

interface Skill {
    name: string;
    proficiency: number;                    // 1-5 indicating proficiency level
    href: string;                           // Link to external page
}

interface SkillCategory {
    category: string;                       // Name of the skill category
    skills: Skill[];                        // Array of skills associated with the category
    icon: IconType;
}

const skillsData: SkillCategory[] = [
    {
        category: 'Programming Languages',
        icon: FaPython,
        skills: [
            {
                name: 'Python',
                proficiency: 5,
                href: ''
            },
            {
                name: 'R',
                proficiency: 5,
                href: ''
            },
            {
                name: 'Java',
                proficiency: 4,
                href: ''
            },
            {
                name: 'C',
                proficiency: 3,
                href: ''
            },
            {
                name: 'C++',
                proficiency: 4,
                href: ''
            },
            {
                name: 'C#',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Javascript',
                proficiency: 5,
                href: ''
            },
            {
                name: 'TypeScript',
                proficiency: 3,
                href: ''
            },
            {
                name: 'MATLAB',
                proficiency: 4,
                href: ''
            },
            {
                name: 'PHP',
                proficiency: 1,
                href: ''
            },
            {
                name: 'Prolog',
                proficiency: 4,
                href: ''
            }
        ]
    },
    {
        category: 'Markup & Styling Languages',
        icon: FaPython,
        skills: [
            {
                name: 'HTML',
                proficiency: 4,
                href: ''
            },
            {
                name: 'CSS',
                proficiency: 3,
                href: ''
            },
            {
                name: 'LaTeX',
                proficiency: 5,
                href: ''
            }
            ,
            {
                name: 'GitHub Markdown',
                proficiency: 4,
                href: ''
            }
        ]
    },
    {
        category: 'Machine Learning',
        icon: FaPython,
        skills: [
            {
                name: 'Scikit-learn',
                proficiency: 5,
                href: 'https://scikit-learn.org/'
            },
            {
                name: 'Tensorflow',
                proficiency: 4,
                href: 'https://www.tensorflow.org/'
            },
            {
                name: 'Keras',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Sklearn',
                proficiency: 4,
                href: ''
            },
            {
                name: 'Arules',
                proficiency: 1,
                href: ''
            },
            {
                name: 'SciPy',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Implicit',
                proficiency: 2,
                href: ''
            }
        ]
    },
    {
        category: 'Data Science',
        icon: FaPython,
        skills: [
            {
                name: 'Tidyverse',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Arrow',
                proficiency: 2,
                href: ''
            },
            {
                name: 'Dplyr',
                proficiency: 3,
                href: ''
            }
        ]
    },
    {
        category: 'Game Development',
        icon: FaPython,
        skills: [
            {
                name: 'Unreal Engine 5',
                proficiency: 4,
                href: ''
            },
            {
                name: 'Unity',
                proficiency: 4,
                href: ''
            }
        ]
    },
    {
        category: 'Database',
        icon: FaPython,
        skills: [
            {
                name: 'MongoDB',
                proficiency: 5,
                href: ''
            },
            {
                name: 'SQL',
                proficiency: 2,
                href: ''
            }
        ]
    },
    {
        category: 'Web Development',
        icon: FaPython,
        skills: [
            {
                name: 'React',
                proficiency: 4,
                href: 'https://reactjs.org/'
            },
            {
                name: 'Next.js',
                proficiency: 2,
                href: 'https://nextjs.org/'
            },
            {
                name: 'Express',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Node.js',
                proficiency: 4,
                href: ''
            },
            {
                name: 'TailwindCSS',
                proficiency: 4,
                href: ''
            }
        ]
    },
    {
        category: 'Data Analysis',
        icon: FaPython,
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
            },
            {
                name: 'MatPlotLib',
                proficiency: 4,
                href: ''
            },
            {
                name: 'Seaborn',
                proficiency: 3,
                href: ''
            },
            {
                name: 'GGPlot2',
                proficiency: 4,
                href: ''
            }
        ]
    },
    {
        category: 'Web Scraping',
        icon: FaPython,
        skills: [
            {
                name: 'Rvest',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Beautiful Soup',
                proficiency: 4,
                href: ''
            },
            {
                name: 'Request',
                proficiency: 4,
                href: ''
            }
        ]
    },
    {
        category: 'Code Editor & IDEs',
        icon: FaPython,
        skills: [
            {
                name: 'VS Code',
                proficiency: 5,
                href: ''
            },
            {
                name: 'Visual Studio',
                proficiency: 3,
                href: ''
            },
        ]
    },
    {
        category: 'Developer Tools',
        icon: FaPython,
        skills: [
            {
                name: 'Git',
                proficiency: 5,
                href: ''
            },
            {
                name: 'GitHub',
                proficiency: 5,
                href: ''
            },
            {
                name: 'ChatGPT',
                proficiency: 5,
                href: ''
            },
            {
                name: 'Jira',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Confluence',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Slack',
                proficiency: 4,
                href: ''
            },
            {
                name: 'DrawIO',
                proficiency: 4,
                href: ''
            },
            {
                name: 'Zotero',
                proficiency: 2,
                href: ''
            }
        ]
    },
    {
        category: 'Office Suites',
        icon: FaPython,
        skills: [
            {
                name: 'Microsoft Suite',
                proficiency: 5,
                href: ''
            },
            {
                name: 'LibreOffice Suite',
                proficiency: 3,
                href: ''
            }
        ]
    },
    {
        category: 'Image and Video Editing',
        icon: FaPython,
        skills: [
            {
                name: 'GIMP',
                proficiency: 1,
                href: ''
            },
            {
                name: 'Adobe Photoshop',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Adobe Illustrator',
                proficiency: 4,
                href: ''
            },
            {
                name: 'GarageBand',
                proficiency: 4,
                href: ''
            },
            {
                name: 'IMovie',
                proficiency: 4,
                href: ''
            },
            {
                name: 'FFMPEG',
                proficiency: 4,
                href: ''
            },
        ]
    },
    {
        category: 'Scripting & Automation',
        icon: FaPython,
        skills: [
            {
                name: 'ArgParse',
                proficiency: 4,
                href: ''
            },
            {
                name: 'Pillow',
                proficiency: 4,
                href: ''
            },
            {
                name: 'OpenPyxl',
                proficiency: 4,
                href: ''
            },
        ]
    },
    {
        category: 'DevOps',
        icon: FaPython,
        skills: [
            {
                name: 'Docker',
                proficiency: 2,
                href: ''
            },
            {
                name: 'Github Actions',
                proficiency: 1,
                href: ''
            }
        ]
    },
    {
        category: 'Network Tools',
        icon: FaPython,
        skills: [
            {
                name: 'WireShark',
                proficiency: 2,
                href: ''
            }
        ]
    },
    {
        category: 'API',
        icon: FaPython,
        skills: [
            {
                name: 'TomTom',
                proficiency: 3,
                href: ''
            },
            {
                name: 'Frame.IO',
                proficiency: 3,
                href: ''
            }
        ]
    },  
];
  
  export default skillsData;
  