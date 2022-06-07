import firebase from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD38BvTm7vCBjF7kI0yvHX3XcWj_GMwwcQ",
  authDomain: "linkedin-clone-9e8a7.firebaseapp.com",
  projectId: "linkedin-clone-9e8a7",
  storageBucket: "linkedin-clone-9e8a7.appspot.com",
  messagingSenderId: "693400655960",
  appId: "1:693400655960:web:c7999b74ef99b6ffb0122d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
