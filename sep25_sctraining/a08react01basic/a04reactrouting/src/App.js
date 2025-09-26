import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Multiply from './Multiply';

function App() {
  return (
    <div>
      <h1>Math App</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Numbers</Link> |{" "}
        <Link to="/multiply">Multiply Numbers</Link>
      </nav>
      <hr />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/multiply" element={<Multiply />} />
      </Routes>
    </div>
  );
}

export default App;
