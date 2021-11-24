import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWjO-Ot_J1NNL7aBQFo5BCSKaM1zAvpmQ',
  authDomain: 'birtherater.firebaseapp.com',
  projectId: 'birtherater',
  storageBucket: 'birtherater.appspot.com',
  messagingSenderId: '45177741278',
  appId: '1:45177741278:web:d281813991902aede5074f',
  measurementId: 'G-LBYM1LHDLN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
