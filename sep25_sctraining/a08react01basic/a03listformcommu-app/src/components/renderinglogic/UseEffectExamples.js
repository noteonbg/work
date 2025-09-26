import React, { useState, useEffect } from 'react';

function UseEffectExamples() {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 1. Run once on mount
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  // 2. Run on state change
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // 3. Run on every render
  useEffect(() => {
    console.log('Component re-rendered');
  });

  // 4. Cleanup on unmount (and on effect re-run)
  useEffect(() => {
    console.log('Listening for userId:', userId);
    return () => {
      console.log('Cleaning up previous effect for userId:', userId);
    };
  }, [userId]);

  // 5. Async API call on userId change
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [userId]);

  // 6. Window resize listener
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 7. Timer: show current time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>useEffect Playground</h1>

      {/* Count Button */}
      <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>

      {/* User ID Input */}
      <div style={{ marginTop: '20px' }}>
        <label>
          Enter User ID (1-10):{' '}
          <input
            type="number"
            min="1"
            max="10"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
          />
        </label>
      </div>

      {/* User Info */}
      {user && (
        <div style={{ marginTop: '10px' }}>
          <h3>User Info</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      {/* Window Width and Clock */}
      <div style={{ marginTop: '20px' }}>
        <p>📏 Window width: {width}px</p>
        <p>⏰ Time: {time}</p>
      </div>
    </div>
  );
}

export default UseEffectExamples;
