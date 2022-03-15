import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { movieCollectionRef } from '../lib/firestore.collections';
import { db } from '../lib/firebase_init';
import Movie from './Movie';

const RealtimeMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(movieCollectionRef, (snapshot) => {
      setMovies(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteMovie = (id) => {
    // Get a specific doc
    // database, collectionName, Id;

    const docRef = doc(db, 'movies', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Movie deleted');
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <h4>Realtime Movies</h4>
      <ul>
        {movies.map((movie) => (
          <Movie movie={movie} onDeleteMovie={deleteMovie} />
        ))}
      </ul>
    </>
  );
};

export default RealtimeMovies;
