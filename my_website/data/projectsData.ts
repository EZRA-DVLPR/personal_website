interface Project {
  title: string,
  description: string,
  status: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  // {
  //   title: 'Title text to display',
  //   description: `Text to display`,
  //   status: 'Planned' | 'Completed' | 'In Progress',
  //   imgSrc: '/static/images/IMG',                            optional
  //   href: '/blog/BLOGPAGENAME',                              optional
  // },
]

export default projectsData
