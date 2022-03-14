import { collection } from 'firebase/firestore';
import { db } from './firebase_init';

export const movieCollectionRef = collection(db, 'movies');
