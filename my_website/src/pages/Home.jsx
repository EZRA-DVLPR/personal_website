import React from 'react';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';
import LightDarkButton from '../components/LightDarkButton';

const Home = () => {
  return (
    <div>
        <h1>Home Page!</h1>
        <Loader />
        <BackButton />
        <LightDarkButton />
    </div>
  )
}

export default Home