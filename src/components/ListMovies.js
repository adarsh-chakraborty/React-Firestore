import React, { useState, useEffect } from 'react';
import { getDocs, deleteDoc, doc } from 'firebase/firestore';

import { movieCollectionRef } from '../lib/firestore.collections';
import { db } from '../lib/firebase_init';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    getDocs(movieCollectionRef)
      .then((response) => {
        const movieData = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id
        }));
        setMovies(movieData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

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
    <div>
      <h4>List Movies</h4>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.data.name}</strong> - {movie.id}
            <button
              onClick={() => {
                deleteMovie(movie.id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
