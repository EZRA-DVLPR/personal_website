import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const HomeButton = ({destination = '/'}) => {
  const { enqueueSnackbar } = useSnackbar();
  const sendBack = () => {
    enqueueSnackbar('Back to the Home Page!', {variant: 'success'})
  }

  return (
    <div onClick={sendBack} className = 'flex'>
        <Link to = {destination} className = 'bg-sky-500 text-white px-4 rounded-lg w-fit'>
            <AiFillHome className = 'text-2xl' />
        </Link>
    </div>
  )
}

export default HomeButton