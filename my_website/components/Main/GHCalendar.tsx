'use client'

import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'next-themes';

const useScreenSize = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1520 });

  if (isSmallScreen) {
    return 'sm';
  } else if (isMediumScreen) {
    return 'md';
  } else {
    return 'lg';
  }
};

const GHCalendar = () => {
  const { theme } = useTheme();
  const screensize = useScreenSize();
  const monthsToShow = screensize === 'sm' ? 12 : screensize === 'md' ? 7 : 0;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <br></br>
      <h1 className='text-3xl font-bold'>Github Activity Calendar</h1>
      <div className='flex items-center justify-center'>
        <GitHubCalendar
          username='EZRA-DVLPR'
          transformData={data => data.slice(monthsToShow * 20, 365)}
          hideTotalCount={true}
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
        />
      </div>
      <br></br>
    </>
  );
};

export default GHCalendar;
