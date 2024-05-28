interface Project {
  title: string,
  description: string,
  status: string,                               //'Planned' | 'Completed' | 'In Progress',
  href?: string,                                //optional
  imgSrc?: string,                              //optional
}

// Showcase your projects with a hero image (16 x 9)

const projectsData: Project[] = [
  // {
  //   title: 'Title text to display',
  //   description: `Text to display`,
  //   status: 'Planned'
  //   imgSrc: '/static/images/IMG',
  //   href: '/blog/BLOGPAGENAME',
  // },
]

export default projectsData
