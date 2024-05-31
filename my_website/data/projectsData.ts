interface Project {
  title: string
  description: string
  status: string //'Planned', | 'Completed' | 'In Progress',
  href?: string //optional
  imgSrc?: string //optional
}

// Showcase your projects with a hero image (16 x 9)

// {
//   title: 'Title',
//   description: 'Descr',
//   status: 'Planned',
//   imgSrc: '/static/projects/IMG',
//   href: '/blog/projects/basicMERN',
// },

const projectsData: Project[] = [
  {
    title: 'Thesis',
    description: 'Proving properties about the Proteus language',
    status: 'In Progress',
    href: '/blog/projects/Thesis',
  },
  {
    title: 'Traffic Modeling',
    description: 'Model Real-Time Traffic in Unity 3D',
    status: 'Completed',
    imgSrc: '/static/projects/TrafficModeling.png',
    href: '/blog/projects/TrafficModeling',
  },
  {
    title: 'Animal Image Classifier',
    description: 'Classifies Animal Images using ML and DL models',
    status: 'Completed',
    imgSrc: '/static/projects/AnimalClassification.png',
    href: '/blog/projects/ML',
  },
  {
    title: 'Music Recommender',
    description: 'Utilizes Implicit DL and standard DM practices for recommending music to users',
    status: 'Completed',
    imgSrc: '/static/projects/MusicRecommender.png',
    href: '/blog/projects/MusicRecommender',
  },
  {
    title: 'Minesweeper',
    description: 'MineSweeper 3D in Unity',
    status: 'Completed',
    imgSrc: '/static/projects/MineSweeper3D.png',
    href: '/blog/projects/Minesweeper',
  },
  {
    title: 'MERN Boilerplate',
    description: 'Boilerplate project for the MERN Stack. Highly simplistic and lightweight',
    status: 'Completed',
    imgSrc: '/static/projects/MERNStack.png',
    href: '/blog/projects/basicMERN',
  },
  {
    title: 'The Crucible',
    description: 'Frame.IO integration for automating several tasks using scripting',
    status: 'Completed',
    href: '/blog/projects/Comp_467',
  },
  {
    title: 'FSW',
    description: 'File Sharing Website that utilizes the MERN stack',
    status: 'Completed',
    href: '/blog/projects/FSWeb',
  },
  {
    title: 'Personal Website',
    description:
      'Finished designing this website with key integrations and interactivity. Uses Next.js with Typescript, TailwindCSS and many other libraries',
    status: 'Completed',
    href: '/blog/projects/first-post',
  },
  {
    title: 'GameList',
    description: 'Web Scraper of HTLB and inserts into XLS. User input to edit the XLS',
    status: 'In Progress',
    href: '/blog/projects/GameList',
  },

  {
    title: 'Cipolla Algorithm',
    description: 'Finds the square roots of a given number',
    status: 'Completed',
    href: '/blog/projects/CipollaAlg',
  },
  {
    title: 'Closest Prime',
    description: 'Finds the closest prime to a given number',
    status: 'Completed',
    href: '/blog/projects/ClosestPrime',
  },
  {
    title: 'File Content Sorter',
    description: 'Sorts the contents of a text file on each line',
    status: 'Completed',
    href: '/blog/projects/FileContentSorter',
  },
  {
    title: 'Tents',
    description: 'Game of Tents to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'MineSweeper',
    description: 'Game of MineSweeper to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Sudoku',
    description: 'Game of Sudoku to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Stack a Veggie',
    description:
      'Game similar to Suika Watermelon game but with vegetables. Hope to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Memory Card Game',
    description: 'Memory Card Game to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Auto Clicker / Repeated Key Presser',
    description: 'Simple program to repeat key presses or clicks',
    status: 'Planned',
  },
  {
    title: 'AI to learn to play Geometry Dash',
    description: 'Construct a model to learn how to play Geometry Dash',
    status: 'Planned',
  },
  {
    title: 'Finding last digits of a given n^m mod R',
    description: 'Fun number theory mini-project',
    status: 'Planned',
  },
  {
    title: 'Magic Square Finder',
    description: 'Find an N s.t. N is NOT a Carmichael Number',
    status: 'Planned',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Game to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Brick Breaker',
    description: 'Game to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Hangman but for all audiences',
    description: 'Game to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Snake',
    description: 'Game to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Monster Farm',
    description: 'Mobile Game about farming and resource management with cute monsters',
    status: 'Planned',
  },
  {
    title: '2D/3D Maze',
    description: 'Game to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Pokemon Helper tool',
    description: `Calculate type advantages/disadvantages, breeding help, etc.`,
    status: 'Planned',
  },
  {
    title: 'Grade calculator',
    description:
      'program that calculates grades given the assignments and their weights accounting for curves',
    status: 'Planned',
  },
  {
    title: 'Dice Roller',
    description: 'Program to roll up to 20 dice of any standard shape eg. d4, d20',
    status: 'Planned',
  },
  {
    title: 'Algorithm Visualizer + YT video',
    description:
      'Create a YT channel to explain concepts like algorithms and visualize them in code in several languages',
    status: 'Planned',
  },
  {
    title: 'Hydra Virus',
    description: 'Create a virus like the fork virus to spawn itself repeatedly',
    status: 'Planned',
  },
  {
    title: 'Text Adventure Game',
    description: 'Simple Text Adventure game to be rendered in the browser',
    status: 'Planned',
  },
  {
    title: 'Card Game',
    description: 'Small Scale Multiplayer card game',
    status: 'Planned',
  },
]

export default projectsData
