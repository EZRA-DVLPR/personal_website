import React, { createContext, useState, useEffect } from 'react';

//create the context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  //use localStorage for values of isLightMode
  const [isLightMode, setIsLightMode] = useState(() => {
    //retrieve initial value from localStorage
    const storedValue = localStorage.getItem('isLightMode');
    
    //default true if not found
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  //toggle isLightMode and save to localStorage
  const toggleLightMode = () => {
    const newIsLightMode = !isLightMode;
    setIsLightMode(newIsLightMode);
    //save value to localStorage
    localStorage.setItem('isLightMode', JSON.stringify(newIsLightMode));
  };

  //save changes to localStorage
  useEffect(() => {
    //change value in localStorage
    localStorage.setItem('isLightMode', JSON.stringify(isLightMode));
  }, [isLightMode]);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };