import React, { useContext } from 'react';
import Loader from '../components/Loader';
import HomeButton from '../components/HomeButton';
import LightDarkButton from '../components/LightDarkButton';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
  const { isLightMode } = useContext(ThemeContext);
  
  return (
    <div className={ isLightMode ? "bg-gray-100 min-h-screen" : "bg-gray-700 min-h-screen"}>
        <h1>Home Page!</h1>
        <HomeButton />
        <LightDarkButton />
        <div className='w-1/2'>
          <Loader />
        </div>
    </div>
  )
}

export default Home