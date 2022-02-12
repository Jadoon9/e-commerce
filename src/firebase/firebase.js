import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC8RZrq3PtlXneqxOwliBzqXihOJlduIfQ',
  authDomain: 'crwn-clothing-5b1a5.firebaseapp.com',
  projectId: 'crwn-clothing-5b1a5',
  storageBucket: 'crwn-clothing-5b1a5.appspot.com',
  messagingSenderId: '302751077615',
  appId: '1:302751077615:web:95d0d1ed29b4f8806fb71a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export { auth };
export default db;
