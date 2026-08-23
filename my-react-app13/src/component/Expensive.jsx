
import React, { useCallback, useEffect, useState, useRef } from 'react';

function Expensive() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const previousfunction = useRef(null);

  const expensivecalculation = useCallback(() => {
    console.log("Running expensive calculation.....");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += 1;
    }

    return result;
  }, [count]);

  useEffect(() => {
    if (previousfunction.current) {
      if (previousfunction.current === expensivecalculation) {
        console.log("Function not re-created");
      } else {
        console.log("Function got re-created");
      }
    }

    previousfunction.current = expensivecalculation;
  }, [expensivecalculation]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Something"
      />

      <p>
        Expensive calculation result: {expensivecalculation()}
      </p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default Expensive;
