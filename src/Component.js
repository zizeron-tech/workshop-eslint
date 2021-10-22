import { useState } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = (currentCount) => {
    setCount(currentCount - 1);
  };

  const handleIncrement = (currentCount, setter) => {
    setter(currentCount + 1);
  };

  return (
    <div>
      My Component:
      <div />
      <button
        type="button"
        onClick={() => handleIncrement(count, setCount)}
      >
        Increment
      </button>
      <p>holaholaholaholaholaholaholaholahola</p>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => handleDecrement(count, setCount)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Component;
