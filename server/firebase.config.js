import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBJf_iUs7fUr2te4J-khvD9su7X6HHPMs0',
    authDomain: 'multiplatform-playlist.firebaseapp.com',
    projectId: 'multiplatform-playlist',
    storageBucket: 'multiplatform-playlist.firebasestorage.app',
    messagingSenderId: '1072209827256',
    appId: '1:1072209827256:web:179e3917fe6e6ca9732b4d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const storage = getStorage(app);
export const auth = getAuth(app); // https://firebase.google.com/docs/auth/web/start#next_steps
