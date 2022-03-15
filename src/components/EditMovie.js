import React, { useState } from 'react';
import { db } from '../lib/firebase_init';
import { doc, updateDoc } from 'firebase/firestore';
// import { setDoc } from 'firebase/firestore';

const EditMovie = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '' || id === '') return;

    // Database, collectionName, doc_id;
    const docRef = doc(db, 'movies', id);

    updateDoc(docRef, { name })
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));

    /*
    setDoc(docRef, {payload});
    completely over-writes the document with the fields provided,

    where in updateDoc, the fields provided are updated and other fields are kept.
    */
  }
  return (
    <>
      <h4>Edit Movie</h4>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="id">ID</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="name">Movie Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update Movie</button>
      </form>
    </>
  );
};

export default EditMovie;
