import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { isSupported, getAnalytics, type Analytics } from "firebase/analytics";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Avoid re-initializing on hot reload / multiple imports
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// The public site only ever reads from Firestore — it never signs anyone
// in. Firebase Auth lives entirely in the separate local admin panel
// (see /smilo-admin), so it's intentionally not wired up here at all.
export const db = getFirestore(firebaseApp);

// Analytics only works in the browser (it needs `window`), and only if a
// measurementId was provided — so it's initialized lazily and guarded.
let _analytics: Analytics | null = null;
export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined" || !firebaseConfig.measurementId) return null;
  if (_analytics) return _analytics;
  if (await isSupported()) {
    _analytics = getAnalytics(firebaseApp);
  }
  return _analytics;
}
