import React, { useContext } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../contexts/ThemeContext';
import { useSnackbar } from 'notistack';

const LightDarkButton = () => {
  const { toggleLightMode, isLightMode } = useContext(ThemeContext);
  const { enqueueSnackbar } = useSnackbar();

  //toggle changes when button is clicked
  const handleToggle = () => {
    toggleLightMode();
    {isLightMode ? 
      enqueueSnackbar('Changed to Dark Mode') : 
      enqueueSnackbar('Changed to Light Mode', {variant: "info"}) 
    }
  };

  return (
      <div className="flex items-center justify-center">
          <button
              onClick={handleToggle}
              className={`flex items-center p-2 rounded-lg 
              ${isLightMode ? 'bg-blue-500' : 'bg-gray-300'}`}>

              {/* Render different icons based on the state */}

              {isLightMode ? (<MdLightMode className="text-white text-2xl" />) : (<MdDarkMode className="text-gray-700 text-2xl" />)}
          </button>
      </div>
  );
}

export default LightDarkButton