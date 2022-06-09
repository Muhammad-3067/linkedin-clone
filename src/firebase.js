import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD38BvTm7vCBjF7kI0yvHX3XcWj_GMwwcQ",
  authDomain: "linkedin-clone-9e8a7.firebaseapp.com",
  projectId: "linkedin-clone-9e8a7",
  storageBucket: "linkedin-clone-9e8a7.appspot.com",
  messagingSenderId: "693400655960",
  appId: "1:693400655960:web:c7999b74ef99b6ffb0122d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
