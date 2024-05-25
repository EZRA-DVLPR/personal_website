'use client'

import GitHubCalendar from 'react-github-calendar'
import { useMediaQuery } from 'react-responsive';

const useScreenSize = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  if (isSmallScreen) {
    return 'sm';
  } else if (isMediumScreen) {
    return 'md';
  } else {
    return 'lg';
  }
};

const GHCalendar = () => {
    const screensize = useScreenSize()
    const monthsToShow = screensize === 'sm' ? 12 : screensize === 'md' ? 7 : 0;
    
    return (
        <>
            <br></br>
            <h1 className='text-3xl font-bold'>Github Activity Calendar</h1>
            <div className='flex items-center justify-center'>
                <GitHubCalendar 
                    username='EZRA-DVLPR'
                    transformData={data => data.slice(monthsToShow * 20, 365)} 
                    hideTotalCount={true}/>
            </div>
            <br></br>
        </>
    )
}

export default GHCalendar