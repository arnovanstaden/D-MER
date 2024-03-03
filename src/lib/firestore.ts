'use server';

import { firestoreAdminDb } from './firebase/admin';

type FirestoreCollectionId = 'courses' | 'coupons' | 'bookings';

/**
 * Retrieves a single document from the specified Firestore collection.
 * @param category The Firestore collection ID of the document to retrieve.
 * @param id The ID of the document to retrieve.
 * @returns A document object typed as T or undefined if the document does not exist.
 */
export const getFirestoreDocument = async <T>(category: FirestoreCollectionId, id: string): Promise<T | undefined> => {
  const documentRef = firestoreAdminDb.collection(category).doc(id);
  const docSnap = await documentRef.get();
  if (!docSnap.exists) return undefined;

  return {
    id: docSnap.id,
    ...(docSnap.data()),
  } as T;
}

/**
 * Queries a single document from the specified Firestore collection based on a field condition.
 * @param category The Firestore collection ID to query within.
 * @param field The field name to query by.
 * @param value The value to match for the given field.
 * @returns A single document object matching the query, typed as T, or undefined if no matching document is found.
 */
export const queryFirestoreDocument = async <T>(category: FirestoreCollectionId, field: string, value: string | number): Promise<T | undefined> => {
  const collectionRef = firestoreAdminDb.collection(category);
  const querySnapshot = await collectionRef.where(field, '==', value).get();
  if (querySnapshot.empty) return undefined;

  const docSnap = querySnapshot.docs[0];
  const docData = docSnap.data();

  return {
    id: docSnap.id,
    ...docData,
    ...(docData.date && { date: docData.date.toDate ? docData.date.toDate() : docData.date }),
    ...(docData.expiry && { expiry: docData.expiry.toDate ? docData.expiry.toDate() : docData.expiry })
  } as T;
}

/**
 * Fetches a collection from Firestore using the Firebase Admin SDK and returns it as an array of type T.
 * @param category The Firestore collection ID to fetch.
 * @returns An array of documents from the specified collection, typed as T[].
 */
export const getFirestoreDocumentCollection = async <T>(category: FirestoreCollectionId): Promise<T[]> => {
  const collectionRef = firestoreAdminDb.collection(category);
  const querySnapshot = await collectionRef.get();

  const data = querySnapshot.docs.map((doc) => {
    const docData = doc.data();

    return {
      ...docData,
      id: doc.id,
      ...(docData.date && { date: docData.date.toDate ? docData.date.toDate() : docData.date })
    }
  });

  return data as T[];
};


/**
 * Adds a new document with the given data to the specified Firestore collection.
 * @param category The Firestore collection ID where the document will be added.
 * @param data The data to be added to the new document.
 */
export const addFirestoreDocument = async <T>(category: FirestoreCollectionId, data: T): Promise<void> => {
  const collectionRef = firestoreAdminDb.collection(category);
  await collectionRef.add(data as object);
}

/**
 * Updates an existing document in the specified Firestore collection.
 * @param category The Firestore collection ID containing the document to update.
 * @param id The ID of the document to update.
 * @param data The new data for the document.
 */
export const updateFirestoreDocument = async <T>(category: FirestoreCollectionId, id: string, data: T): Promise<void> => {
  const documentRef = firestoreAdminDb.collection(category).doc(id);
  await documentRef.update(data as object);
}

/**
 * Deletes a document from the specified Firestore collection.
 * @param category The Firestore collection ID containing the document to be deleted.
 * @param id The ID of the document to delete.
 */
export const deleteFirestoreDocument = async (category: FirestoreCollectionId, id: string): Promise<void> => {
  const documentRef = firestoreAdminDb.collection(category).doc(id);
  await documentRef.delete();
}