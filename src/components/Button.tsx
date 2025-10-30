import React, { useState } from "react";

const Button: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    alert(`Button clicked ${clickCount + 1} times!`);
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Click ({clickCount})
    </button>
  );
};

export default Button;
