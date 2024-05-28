import React, { useContext } from 'react';
import Loader from '../components/Loader';
import HomeButton from '../components/HomeButton';
import LightDarkButton from '../components/LightDarkButton';
import { ThemeContext } from '../contexts/ThemeContext';
import { useSnackbar } from 'notistack';

const Home = () => {
  const { isLightMode } = useContext(ThemeContext);
  const { enqueueSnackbar } = useSnackbar();

  const testDark = () => {
    enqueueSnackbar("bet", {variant: "darktest"});
  }

  const testRC = () => {
    enqueueSnackbar("haha", {variant: "rc"})
  }
  
  return (
    <div className={ isLightMode ? "bg-gray-100 min-h-screen" : "bg-gray-700 min-h-screen"}>
        <h1>Home Page!</h1>
        <HomeButton />
        <LightDarkButton />
        <div className='w-1/2'>
          <Loader />
        </div>
        <div>
          <button onClick={testDark}>
            Test Dark Notification
          </button>
        </div>
        <div>
          <button onClick={testRC}>
            Test RC not
          </button>
        </div>


        <a href='./testBlog.html'>Go to test blog</a>
        
    </div>
  )
}

export default Home