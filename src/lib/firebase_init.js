import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

console.log(process.env.REACT_APP_authDomain);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKeyy,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize the Firebase application.
const app = initializeApp(firebaseConfig);

// Initialize Firestore from the app.
export const db = getFirestore(app);
