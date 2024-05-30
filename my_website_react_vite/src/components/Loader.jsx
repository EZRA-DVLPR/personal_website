import React from 'react';

const Loader = () => {
  const circleCount = 7;//amount of figures
  const radius = 8; //radius for shapes
  const center = { x: 12, y: 12 }; //center of the SVG
  const colorsList = [
    'text-red-500',
    'text-orange-500',
    'text-yellow-500',
    'text-green-500',
    'text-blue-500',
    'text-indigo-500',
    'text-purple-500',
  ] //added to save the colors from being purged by tailwindCSS

  //calculate the position of each circle around the center
  const getCirclePosition = (index) => {
    const angle = (index / circleCount) * Math.PI * 2;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="flex justify-center items-center animate-spin">
      <svg
        className="w-16 h-16 m-8 animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {[...Array(circleCount)].map((_, index) => {
          const { x, y } = getCirclePosition(index);
          //console.log(index, colorsList[index])
          const color = colorsList[index];
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={2}//radius of shape
              className={`${colorsList[index]} animate-grow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Loader;
