import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { movieCollectionRef } from '../lib/firestore.collections';

const AddMovie = () => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name === '') return;

    addDoc(movieCollectionRef, { name })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <h4>Add Movie</h4>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Movie Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddMovie;
