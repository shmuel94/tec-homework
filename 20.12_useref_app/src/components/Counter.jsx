import { useEffect, useState } from "react";

const Counter = ({ num }) => {
  const [count, setCount] = useState(num);

  useEffect(() => {
    setCount(num);
  }, [num]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>count : {count}</p>
    </div>
  );
};

export default Counter;