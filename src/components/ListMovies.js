import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase_init';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    const movieCollectionRef = collection(db, 'movies');
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
          <li key={movie.id}>{movie.data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
