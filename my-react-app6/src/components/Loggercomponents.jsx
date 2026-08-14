import React, { useEffect, useState } from 'react';

function Loggercomponents() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log('component rendered or count changed', count);
  });

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setcount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Loggercomponents;