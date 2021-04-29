import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCh7ySwqZ6SJeHDgd0fHz9KMDr4UOMvCZU",
    authDomain: "slack-clone-yt-28c9a.firebaseapp.com",
    projectId: "slack-clone-yt-28c9a",
    storageBucket: "slack-clone-yt-28c9a.appspot.com",
    messagingSenderId: "10850686313",
    appId: "1:10850686313:web:12ca9c3b1a0d27dbdfd9f8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firestore is a real time database
  const db = firebaseApp.firestore();
  // authorization
  const auth = firebase.auth();
  // google authentication
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db }

  