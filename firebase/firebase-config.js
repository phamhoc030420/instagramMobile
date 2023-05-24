// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBXL4IQhBfnl6Zwa5eF_l2Ub6NSApwoS3w',
  authDomain: 'instagamclone-a88af.firebaseapp.com',
  projectId: 'instagamclone-a88af',
  storageBucket: 'instagamclone-a88af.appspot.com',
  messagingSenderId: '1089148015039',
  appId: '1:1089148015039:web:38ab3c76cc84844aae110a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
