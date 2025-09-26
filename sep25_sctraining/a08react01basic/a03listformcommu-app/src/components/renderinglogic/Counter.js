import React, { useState } from 'react';
// Re-render on State Change
function Counter() {
  const [count, setCount] = useState(0);
//Every Re-render Runs the Component Function Again
console.log("Counter component ran again");
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter


/*
useState(0) initializes the count to 0.
On button click:
setCount updates the state.
React re-renders the component.
Updated value of count is displayed

*/