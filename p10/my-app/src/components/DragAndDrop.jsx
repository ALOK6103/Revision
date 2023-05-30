import React, { useState } from 'react';

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event) => {
    setDragging(true);
    // Customize the data transferred during the drag
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData('text/plain');
    // Perform the necessary logic with the dropped item
    console.log('Dropped item:', droppedItem);
  };

  return (
    <div>
      <div
        id="draggable-item"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Drag Me
      </div>
      <div
        id="droppable-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ backgroundColor: dragging ? 'lightgray' : 'white' }}
      >
        Drop Here
      </div>
    </div>
  );
};

export default DragAndDrop;
