// MultiplesComponent.jsx
import React, { useState } from 'react';
import multipleService from '../services/multipleService';

const MultiplesComponent = () => {
  const [numberGet, setNumberGet] = useState('');
  const [numberPost, setNumberPost] = useState('');
  const [resultGet, setResultGet] = useState('');
  const [resultPost, setResultPost] = useState('');

  const handleGet = async () => {
    try {
      const response = await multipleService.getFifthMultiple(numberGet);
      setResultGet(`Result: ${response.data}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = async () => {
    try {
      const response = await multipleService.postEighthMultiple(numberPost);
      setResultPost(`Result: ${response.data}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Multiples with React</h1>

      <div>
        <h2>GET 5th Multiple</h2>
        <input type="number" value={numberGet} onChange={e => setNumberGet(e.target.value)} />
        <button onClick={handleGet}>Get</button>
        <p>{resultGet}</p>
      </div>

      <div>
        <h2>POST 8th Multiple</h2>
        <input type="number" value={numberPost} onChange={e => setNumberPost(e.target.value)} />
        <button onClick={handlePost}>Post</button>
        <p>{resultPost}</p>
      </div>
    </div>
  );
};

export default MultiplesComponent;
