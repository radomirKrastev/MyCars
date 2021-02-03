import firebase from 'firebase/app';
import 'firebase/auth';

import { FIREBASE_CONFIG } from '../constants/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

// export default firebase;

export const firebaseAuth = firebase.auth();
