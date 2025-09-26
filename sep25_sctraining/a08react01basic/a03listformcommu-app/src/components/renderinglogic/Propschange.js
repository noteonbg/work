import React, { useState } from 'react';

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function Propschange() {
  const [name, setName] = useState('Alice');

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName('Bob')}>Change Name</button>
    </div>
  );
}

export default Propschange

/*
Greeting receives name as a prop.
When the button is clicked:
setName('Bob') updates state in App.
App re-renders.
Greeting is re-rendered with new prop value: Bob
*/