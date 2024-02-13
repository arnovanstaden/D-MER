'use server';

import { collection, getDocs, doc, getDoc, query, orderBy, limit, setDoc, deleteDoc, where, updateDoc } from 'firebase/firestore';
import { firestoreDb } from './firebase';

type FirestoreCollectionId = 'courses' | 'coupons' | 'bookings';

export const getFirestoreDocument = async <T>(category: FirestoreCollectionId, id: string): Promise<T | undefined> => {
  const docRef = doc(firestoreDb, category, id)
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  return {
    ...docData,
    id: docSnap.id,
  } as T;
}

export const queryFirestoreDocument = async <T>(category: FirestoreCollectionId, field: string, value: string | number): Promise<T | undefined> => {
  const q = query(collection(firestoreDb, category), where(field, '==', value));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    const docData = doc.data();

    return {
      ...docData,
      id: doc.id,
      ...(docData.date && { date: docData.date.toDate() })
    }
  });
  return data[0] as T;
}

export const getFirestoreDocumentCollection = async <T>(category: FirestoreCollectionId, search?: boolean): Promise<T[]> => {
  const collectionRef = collection(firestoreDb, category);
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => {
    const docData = doc.data();

    return {
      ...docData,
      id: doc.id,
      ...(docData.date && { date: docData.date.toDate() })
    }
  });

  return data as T[];
}


export const addFirestoreDocument = async <T>(category: FirestoreCollectionId, data: T): Promise<void> => {
  const newDoc = doc(collection(firestoreDb, category))
  await setDoc(newDoc, data as object);
}

export const updateFirestoreDocument = async <T>(category: FirestoreCollectionId, id: string, data: T): Promise<void> => {
  await updateDoc(doc(firestoreDb, category, id), data as object);
}

export const deleteFirestoreDocument = async (category: FirestoreCollectionId, id: string): Promise<void> => {
  await deleteDoc(doc(firestoreDb, category, id));
} 