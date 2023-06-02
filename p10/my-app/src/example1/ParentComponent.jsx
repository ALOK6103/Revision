import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <ChildComponent sendDataToParent={handleDataFromChild} />
      {dataFromChild && <p>Data received from child: {dataFromChild}</p>}
    </div>
  );
}

export default ParentComponent;
