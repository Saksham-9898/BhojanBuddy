// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Check if all required Firebase environment variables are present
const hasValidConfig = [
  import.meta.env.VITE_FIREBASE_API_KEY,
  import.meta.env.VITE_AUTH_DOMAIN,
  import.meta.env.VITE_PROJECT_ID,
  import.meta.env.VITE_STORAGE_BUCKET,
  import.meta.env.VITE_MESSAGING_SENDER_ID,
  import.meta.env.VITE_APP_ID
].every(Boolean);

let auth = null;
let db = null;
let app = null;

if (hasValidConfig) {
  // Firebase configuration with environment variables
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
  };

  try {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
} else {
  console.warn('Firebase configuration is missing or invalid. Firebase features will not be available.');
}

export { auth, db };
export default app;
