/**
 * users/:username
 *  displays profile page based on username
 *
 * users/:username/playlists
 *  provides a list of playlists that the user has created
 *      or added to their library (eventually)
 *
 * playlists/:id
 *  provides a playlist based on its id
 */

import { db } from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';

// Create a user document in collection "users"
export const createUserDoc = async (username, email) => {
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            username: username,
            email: email,
            playlists: [],
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};
