import React from 'react';

function ChildComponent({ sendDataToParent }) {
  const handleClick = () => {
    const data = 'Hello from child!';
    sendDataToParent(data); // Invoke the callback function with data as an argument
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
