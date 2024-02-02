import { collection, getDocs, doc, getDoc, query, orderBy, limit } from 'firebase/firestore';
import { firestoreDb } from './firebase';

type FirestoreCollectionId = 'courses';

export const getFirestoreDocument = async (category: FirestoreCollectionId, id: string): Promise<Object | undefined> => {
  const docRef = doc(firestoreDb, category, id)
  const docSnap = await getDoc(docRef);
  return docSnap.data();
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