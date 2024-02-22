import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAePhT0IP3lHi42weTsKR_CX794t0SBBJs",
  authDomain: "saas-app-d4781.firebaseapp.com",
  projectId: "saas-app-d4781",
  storageBucket: "saas-app-d4781.appspot.com",
  messagingSenderId: "261684653389",
  appId: "1:261684653389:web:49e54ee97f643ff45f9b04"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { app, db, auth, functions };
