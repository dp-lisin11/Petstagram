

  import firebase from "firebase";

  const firebaseApp =firebase.initializeApp({
 
    apiKey: "AIzaSyDjiwrRHDb807QYjLYOPMhcQiVCQ7kwLjQ",
    authDomain: "petstagram-f1712.firebaseapp.com",
    projectId: "petstagram-f1712",
    storageBucket: "petstagram-f1712.appspot.com",
    messagingSenderId: "386731356238",
    appId: "1:386731356238:web:de88ee2a17bbad9347531f",
    measurementId: "G-HMXG9Y098L"
  });
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};