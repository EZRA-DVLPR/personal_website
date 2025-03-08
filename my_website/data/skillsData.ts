import {
	FaCode,
	FaDatabase,
	FaGamepad,
	FaChartBar,
	FaSpider,
	FaTools,
	FaDocker,
	FaWifi,
	FaWindows,
} from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import {
	FaMagnifyingGlassChart,
	FaLaptopCode,
	FaPhotoFilm,
	FaGears,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiLibreoffice } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { IconType } from "react-icons";

interface Skill {
	name: string;
	proficiency: number; // 1-5 indicating proficiency level
	href: string; // Link to external page
}

interface SkillCategory {
	category: string; // Name of the skill category
	skills: Skill[]; // Array of skills associated with the category
	icon: IconType;
}

const skillsData: SkillCategory[] = [
	{
		category: "Programming Languages",
		icon: AiFillCode,
		skills: [
			{
				name: "Python",
				proficiency: 5,
				href: "https://www.python.org/",
			},
			{
				name: "R",
				proficiency: 5,
				href: "https://www.r-project.org/",
			},
			{
				name: "Java",
				proficiency: 4,
				href: "https://www.java.com/en/",
			},
			{
				name: "C",
				proficiency: 3,
				href: "https://en.wikipedia.org/wiki/C_(programming_language)",
			},
			{
				name: "C++",
				proficiency: 4,
				href: "https://cplusplus.com/",
			},
			{
				name: "C#",
				proficiency: 3,
				href: "https://dotnet.microsoft.com/en-us/languages/csharp",
			},
			{
				name: "Javascript",
				proficiency: 5,
				href: "https://en.wikipedia.org/wiki/JavaScript",
			},
			{
				name: "TypeScript",
				proficiency: 3,
				href: "https://www.typescriptlang.org/",
			},
			{
				name: "MATLAB",
				proficiency: 4,
				href: "https://www.mathworks.com/products/matlab.html",
			},
			{
				name: "PHP",
				proficiency: 1,
				href: "https://www.php.net/",
			},
			{
				name: "Prolog",
				proficiency: 4,
				href: "https://en.wikipedia.org/wiki/Prolog",
			},
			{
				name: "Go",
				proficiency: 3,
				href: "https://go.dev/",
			},
			{
				name: "Lua",
				proficiency: 3,
				href: "https://www.lua.org/",
			},
		],
	},
	{
		category: "Markup & Styling Languages",
		icon: FaCode,
		skills: [
			{
				name: "HTML",
				proficiency: 4,
				href: "https://html.spec.whatwg.org/multipage/",
			},
			{
				name: "CSS",
				proficiency: 3,
				href: "https://www.w3.org/TR/CSS/#css",
			},
			{
				name: "LaTeX",
				proficiency: 5,
				href: "https://www.latex-project.org/",
			},
			{
				name: "GitHub Markdown",
				proficiency: 4,
				href: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",
			},
		],
	},
	{
		category: "Machine Learning",
		icon: LuBrainCircuit,
		skills: [
			{
				name: "Scikit-learn",
				proficiency: 5,
				href: "https://scikit-learn.org/",
			},
			{
				name: "Tensorflow",
				proficiency: 4,
				href: "https://www.tensorflow.org/",
			},
			{
				name: "Keras",
				proficiency: 3,
				href: "https://www.tensorflow.org/guide/keras",
			},
			{
				name: "Arules",
				proficiency: 1,
				href: "https://rdocumentation.org/packages/arules/versions/1.7-7",
			},
			{
				name: "SciPy",
				proficiency: 3,
				href: "https://scipy.org/",
			},
			{
				name: "Implicit",
				proficiency: 2,
				href: "https://github.com/benfred/implicit",
			},
		],
	},
	{
		category: "Data Science",
		icon: FaMagnifyingGlassChart,
		skills: [
			{
				name: "Tidyverse",
				proficiency: 3,
				href: "https://www.tidyverse.org/",
			},
			{
				name: "Arrow",
				proficiency: 2,
				href: "https://arrow.apache.org/docs/r/",
			},
			{
				name: "Dplyr",
				proficiency: 3,
				href: "https://dplyr.tidyverse.org/",
			},
		],
	},
	{
		category: "Game Development",
		icon: FaGamepad,
		skills: [
			{
				name: "Unreal Engine 5",
				proficiency: 4,
				href: "https://www.unrealengine.com/en-US",
			},
			{
				name: "Unity",
				proficiency: 4,
				href: "https://unity.com/",
			},
		],
	},
	{
		category: "Database",
		icon: FaDatabase,
		skills: [
			{
				name: "MongoDB",
				proficiency: 5,
				href: "https://www.mongodb.com/",
			},
			{
				name: "SQL",
				proficiency: 3,
				href: "https://en.wikipedia.org/wiki/SQL",
			},
			{
				name: "SQLite",
				proficency: 3,
				href: "https://www.sqlite.org/index.html",
			},
		],
	},
	{
		category: "Web Development",
		icon: FaLaptopCode,
		skills: [
			{
				name: "React",
				proficiency: 4,
				href: "https://reactjs.org/",
			},
			{
				name: "Next.js",
				proficiency: 2,
				href: "https://nextjs.org/",
			},
			{
				name: "Express",
				proficiency: 3,
				href: "https://expressjs.com/",
			},
			{
				name: "Node.js",
				proficiency: 4,
				href: "https://nodejs.org/en",
			},
			{
				name: "TailwindCSS",
				proficiency: 4,
				href: "https://tailwindcss.com/",
			},
		],
	},
	{
		category: "Data Analysis",
		icon: FaChartBar,
		skills: [
			{
				name: "Pandas",
				proficiency: 5,
				href: "https://pandas.pydata.org/",
			},
			{
				name: "NumPy",
				proficiency: 4,
				href: "https://numpy.org/",
			},
			{
				name: "MatPlotLib",
				proficiency: 4,
				href: "https://matplotlib.org/",
			},
			{
				name: "Seaborn",
				proficiency: 3,
				href: "https://seaborn.pydata.org/",
			},
			{
				name: "GGPlot2",
				proficiency: 4,
				href: "https://ggplot2.tidyverse.org/",
			},
		],
	},
	{
		category: "Web Scraping",
		icon: FaSpider,
		skills: [
			{
				name: "Rvest",
				proficiency: 3,
				href: "https://rvest.tidyverse.org/",
			},
			{
				name: "Beautiful Soup",
				proficiency: 4,
				href: "https://beautiful-soup-4.readthedocs.io/en/latest/",
			},
			{
				name: "Requests",
				proficiency: 4,
				href: "https://requests.readthedocs.io/en/latest/",
			},
		],
	},
	{
		category: "Code Editor & IDEs",
		icon: VscVscode,
		skills: [
			{
				name: "VS Code",
				proficiency: 5,
				href: "https://code.visualstudio.com/",
			},
			{
				name: "Neovim",
				proficiency: 4,
				href: "https://neovim.io/",
			},
			{
				name: "Visual Studio",
				proficiency: 3,
				href: "https://visualstudio.microsoft.com/",
			},
			{
				name: "Atom (Archived)",
				proficiency: 3,
				href: "https://atom-editor.cc/",
			},
			{
				name: "SWI Prolog",
				proficiency: 3,
				href: "https://www.swi-prolog.org/",
			},
			{
				name: "Netbeans",
				proficiency: 3,
				href: "https://netbeans.apache.org/front/main/index.html",
			},
			{
				name: "Eclipse",
				proficiency: 2,
				href: "https://eclipseide.org/",
			},
			{
				name: "JFLAP",
				proficiency: 4,
				href: "https://www.jflap.org/",
			},
		],
	},
	{
		category: "Developer Tools",
		icon: FaTools,
		skills: [
			{
				name: "Git",
				proficiency: 5,
				href: "https://git-scm.com/",
			},
			{
				name: "GitHub",
				proficiency: 5,
				href: "https://github.com/",
			},
			{
				name: "ChatGPT",
				proficiency: 5,
				href: "https://openai.com/index/chatgpt/",
			},
			{
				name: "Jira",
				proficiency: 3,
				href: "https://www.atlassian.com/software/jira",
			},
			{
				name: "Confluence",
				proficiency: 3,
				href: "https://www.atlassian.com/software/confluence",
			},
			{
				name: "Slack",
				proficiency: 4,
				href: "https://slack.com/",
			},
			{
				name: "DrawIO",
				proficiency: 4,
				href: "https://www.drawio.com/",
			},
			{
				name: "Zotero",
				proficiency: 3,
				href: "https://www.zotero.org/",
			},
		],
	},
	{
		category: "Office Suites",
		icon: SiLibreoffice,
		skills: [
			{
				name: "Microsoft Suite",
				proficiency: 5,
				href: "https://www.microsoft.com/en-us/microsoft-365/products-apps-services",
			},
			{
				name: "LibreOffice Suite",
				proficiency: 3,
				href: "https://www.libreoffice.org/",
			},
			{
				name: "Microsoft Excel",
				proficiency: 3,
				href: "https://www.microsoft.com/en-us/microsoft-365/excel",
			},
			{
				name: "Microsoft OneNote",
				proficiency: 4,
				href: "https://www.microsoft.com/en-us/microsoft-365/onenote/digital-note-taking-app",
			},
			{
				name: "Microsoft Word",
				proficiency: 5,
				href: "https://www.microsoft.com/en-us/microsoft-365/word-a",
			},
			{
				name: "Microsoft Powerpoint",
				proficiency: 4,
				href: "https://www.microsoft.com/en-us/microsoft-365/powerpoint",
			},
			{
				name: "Libre Writer",
				proficiency: 3,
				href: "https://www.libreoffice.org/discover/writer/",
			},
			{
				name: "Libre Calc",
				proficiency: 2,
				href: "https://www.libreoffice.org/discover/calc/",
			},
			{
				name: "Libre Impress",
				proficiency: 4,
				href: "https://www.libreoffice.org/discover/impress/",
			},
		],
	},
	{
		category: "Media Creation & Editing",
		icon: FaPhotoFilm,
		skills: [
			{
				name: "GIMP",
				proficiency: 1,
				href: "https://www.gimp.org/",
			},
			{
				name: "Inkscape",
				proficiency: 3,
				href: "https://inkscape.org/",
			},
			{
				name: "Krita",
				proficiency: 1,
				href: "https://krita.org/en/",
			},
			{
				name: "Adobe Photoshop",
				proficiency: 3,
				href: "https://www.adobe.com/products/photoshop.html",
			},
			{
				name: "Adobe Illustrator",
				proficiency: 4,
				href: "https://www.adobe.com/products/illustrator.html",
			},
			{
				name: "GarageBand",
				proficiency: 4,
				href: "https://www.apple.com/mac/garageband/",
			},
			{
				name: "IMovie",
				proficiency: 4,
				href: "https://support.apple.com/imovie",
			},
			{
				name: "FFMPEG",
				proficiency: 4,
				href: "https://ffmpeg.org/about.html",
			},
			{
				name: "MPC Essentials",
				proficiency: 2,
				href: "https://www.akaipro.com/mpc-element",
			},
			{
				name: "MPC Beats",
				proficiency: 2,
				href: "https://www.akaipro.com/mpc-beats",
			},
		],
	},
	{
		category: "Scripting & Automation",
		icon: FaGears,
		skills: [
			{
				name: "ArgParse",
				proficiency: 4,
				href: "https://docs.python.org/3/library/argparse.html",
			},
			{
				name: "Pillow",
				proficiency: 4,
				href: "https://python-pillow.org/",
			},
			{
				name: "OpenPyxl",
				proficiency: 4,
				href: "https://openpyxl.readthedocs.io/en/stable/",
			},
		],
	},
	{
		category: "DevOps",
		icon: FaDocker,
		skills: [
			{
				name: "Docker",
				proficiency: 2,
				href: "https://www.docker.com/",
			},
			{
				name: "Github Actions",
				proficiency: 1,
				href: "https://github.com/features/actions",
			},
		],
	},
	{
		category: "Network Tools",
		icon: FaWifi,
		skills: [
			{
				name: "WireShark",
				proficiency: 4,
				href: "https://www.wireshark.org/",
			},
		],
	},
	{
		category: "Operating Systems",
		icon: FaWindows,
		skills: [
			{
				name: "Windows 11",
				proficiency: 3,
				href: "https://www.microsoft.com/en-us/windows/windows-11?r=1",
			},
			{
				name: "Arch",
				proficiency: 4,
				href: "https://archlinux.org/",
			},
			{
				name: "Windows 10",
				proficiency: 5,
				href: "https://edu.gcfglobal.org/en/windows10/getting-started-with-windows-10/1/",
			},
			{
				name: "Windows 8",
				proficiency: 2,
				href: "https://edu.gcfglobal.org/en/windows8/getting-started-with-windows-8/1/",
			},
			{
				name: "MacOS",
				proficiency: 5,
				href: "https://www.apple.com/macos/sonoma/",
			},
			{
				name: "Ubuntu",
				proficiency: 1,
				href: "https://ubuntu.com/",
			},
			{
				name: "Debian",
				proficiency: 1,
				href: "https://www.debian.org/",
			},
		],
	},
	{
		category: "API",
		icon: TbApi,
		skills: [
			{
				name: "TomTom",
				proficiency: 3,
				href: "https://developer.tomtom.com/",
			},
			{
				name: "Frame.IO",
				proficiency: 3,
				href: "https://developer.frame.io/",
			},
		],
	},
];

export default skillsData;
