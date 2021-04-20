import firebase from "firebase/app";
import "firebase/auth";



firebase.initializeApp({
  apiKey: "AIzaSyAUjYjI1fRb0-srvTFWpm_GRFt9rMaMGP0",
  authDomain: "beeper-cab4d.firebaseapp.com",
  projectId: "beeper-cab4d",
  storageBucket: "beeper-cab4d.appspot.com",
  messagingSenderId: "262356559463",
  appId: "1:262356559463:web:afbc528f618909350856c2",
});

const auth = firebase.auth();

export { auth, firebase };
