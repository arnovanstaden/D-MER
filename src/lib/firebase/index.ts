import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Types
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyBWP1yBhuoOU1t6elPyZ-k7UCLIoswgMn4',
  projectId: 'd-mer-9d8b1',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestoreDb = getFirestore(app);