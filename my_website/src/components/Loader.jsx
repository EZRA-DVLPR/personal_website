
const Loader = () => {
  const circleCount = 7;
  const radius = 8; // Adjust the radius as needed
  const center = { x: 12, y: 12 }; // Center of the SVG

  // Calculate the position of each circle around the center
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
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={5}
              className={`text-${['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'][index]}-500 animate-grow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Loader;
