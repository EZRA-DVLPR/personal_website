const getStatusClass = (projStatus) => {
  switch (projStatus) {
    case 'Planned':
      return 'text-red-500 dark:text-red-400'
    case 'In Progress':
      return 'text-blue-500 dark:text-blue-400'
    case 'Completed':
      return 'text-green-500 dark:text-green-400'
    default:
      return 'text-gray-500 dark:text-gray-400'
  }
}

const ProjectStatus = ({ projStatus }) => {
  return <p className={`prose mb-3 max-w-none ${getStatusClass(projStatus)}`}>{projStatus}</p>
}

export default ProjectStatus
