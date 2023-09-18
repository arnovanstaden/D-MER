import { initializeApp, getApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Types
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCAmVZA3dK7xA9cQh3tVEC-XOWUwWUIJVg',
  projectId: 'c-doc-92c86',
};

let app;

try {
  app = getApp();
} catch {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const firestoreDb = getFirestore(app);