import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore;
// import { getAuth } from 'firebase/auth';
// import { collection, getDocs } from "firebase/firestore";
// import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAan8-YIwsdO_LeoDo47TZpEOBoO55yfUs",
    authDomain: "linkedin-74191.firebaseapp.com",
    projectId: "linkedin-74191",
    storageBucket: "linkedin-74191.firebasestorage.app",
    messagingSenderId: "493590114870",
    appId: "1:493590114870:web:9a9653ea14098641a99e97"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // const db = getFirestore(app);
  // const auth = getAuth(app);
 



  // export { db, auth, collection, getDocs };
  export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };