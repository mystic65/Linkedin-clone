import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByhwR3rzbulvq_fu48x6I72BclaJfq_WY",
    authDomain: "linkedin-23c1f.firebaseapp.com",
    projectId: "linkedin-23c1f",
    storageBucket: "linkedin-23c1f.appspot.com",
    messagingSenderId: "681939322401",
    appId: "1:681939322401:web:90132604bcbdcea6064560"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want to use firebase authentication
  const auth = firebase.auth();
  export { db, auth}