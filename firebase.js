// import firebase from "firebase/compat/app";
// import {initializeApp} from 'firebase/App';
// import { getFirestore } from 'firebase/firestore';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDvVEtFJLxm60EMHV8HhR7GfqmQQBsG-24",
//   authDomain: "slack-clone-f1e3b.firebaseapp.com",
//   projectId: "slack-clone-f1e3b",
//   storageBucket: "slack-clone-f1e3b.appspot.com",
//   messagingSenderId: "894865611028",
//   appId: "1:894865611028:web:1a53dd21dcbb6b79a68a01",
//   measurementId: "G-B0KZB6MBMK"
// };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = getFirestore(firebaseApp);
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export {auth, provider, db};
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// // import {initializeApp} from 'firebase/App';
// import {getAuth} from 'firebase/Auth';
// import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvVEtFJLxm60EMHV8HhR7GfqmQQBsG-24",
  authDomain: "slack-clone-f1e3b.firebaseapp.com",
  projectId: "slack-clone-f1e3b",
  storageBucket: "slack-clone-f1e3b.appspot.com",
  messagingSenderId: "894865611028",
  appId: "1:894865611028:web:1a53dd21dcbb6b79a68a01",
  measurementId: "G-B0KZB6MBMK"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,db};
