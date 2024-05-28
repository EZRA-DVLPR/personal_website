interface Project {
  title: string,
  description: string,
  status: string,                               //'Planned' | 'Completed' | 'In Progress',
  href?: string,                                //optional
  imgSrc?: string,                              //optional
}

const projectsData: Project[] = [
  // {
  //   title: 'Title text to display',
  //   description: `Text to display`,
  //   status: 'Planned' | 'Completed' | 'In Progress',
  //   imgSrc: '/static/images/IMG',
  //   href: '/blog/BLOGPAGENAME',
  // },
]

export default projectsData
