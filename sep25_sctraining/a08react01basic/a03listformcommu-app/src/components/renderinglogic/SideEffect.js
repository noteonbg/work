import React, { useState, useEffect } from 'react';

function SideEffect() {
  const [userId, setUserId] = useState('1');      // controlled input
  const [user, setUser] = useState(null);         // fetched data
  const [loading, setLoading] = useState(true);  // loading state
  const [error, setError] = useState(null);       // error handling

  useEffect(() => {
    if (!userId.trim()) return; // prevent empty ID

    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('User is not found really');
        }
        console.log(res.json,"json data got");
        return res.json();
      })
      .then(data => {
        console.log("then json data got",data);
        setUser(data);
      })
      .catch(err => {
        setUser(null);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]); // re-run effect when userId changes

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Fetch User Info</h1>

      <label>
        Enter User ID:{' '}
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ marginTop: '1rem' }}>
          <h3>User Info</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default SideEffect;
