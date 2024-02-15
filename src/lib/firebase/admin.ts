import firebaseAdmin from 'firebase-admin';

//  When developing locally, Next reloads the new code without actually restarting the server. The code to initialize the Admin SDK is re-run and Firebase throws an error thinking we’re trying to initialize another app.
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    }),
    databaseAuthVariableOverride: {
      uid: process.env.FIREBASE_AUTH_VARIABLE,
    },
  });
}
export const firestoreAdminDb = firebaseAdmin.firestore();
