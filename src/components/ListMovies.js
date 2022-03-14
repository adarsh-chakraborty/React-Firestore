import React, { useState, useEffect } from 'react';
import { getDocs } from 'firebase/firestore';

import { movieCollectionRef } from '../lib/firestore.collections';

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

  return (
    <div>
      <h4>List Movies</h4>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.data.name}</strong> - {movie.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
