import { collection, getDocs, doc, getDoc, query, orderBy, limit, setDoc, deleteDoc } from 'firebase/firestore';
import { firestoreDb } from './firebase';

type FirestoreCollectionId = 'courses';

export const getFirestoreDocument = async <T>(category: FirestoreCollectionId, id: string): Promise<T | undefined> => {
  const docRef = doc(firestoreDb, category, id)
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  return {
    ...docData,
    id: docSnap.id,
  } as T;
}

export const getFirestoreDocumentCollection = async <T>(category: FirestoreCollectionId, search?: boolean): Promise<T[]> => {
  const collectionRef = collection(firestoreDb, category);
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data as T[];
}


export const addFirestoreDocument = async <T>(category: FirestoreCollectionId, data: T): Promise<void> => {
  const newDoc = doc(collection(firestoreDb, category))
  await setDoc(newDoc, data as object);
}

export const updateFirestoreDocument = async <T>(category: FirestoreCollectionId, id: string, data: T): Promise<void> => {
  const docRef = doc(collection(firestoreDb, category, id))
  await setDoc(docRef, data as object);
}

export const deleteFirestoreDocument = async (category: FirestoreCollectionId, id: string): Promise<void> => {
  await deleteDoc(doc(firestoreDb, category, id));
} 