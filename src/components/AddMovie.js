import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase_init';

const AddMovie = () => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name === '') return;

    const moviesCollectionRef = collection(db, 'movies');
    addDoc(moviesCollectionRef, { name })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <h4>Add Movie</h4>

      <form onSubmit={handleSubmit}>
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
