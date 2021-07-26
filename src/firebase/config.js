  //import firebase
  import firebase from 'firebase/app';
  //import firebase storge
  import 'firebase/storage'
  //import firestore for data base
  import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDRqBTEE1U0K4kMVKsvRyrg-AZ4la0j79o",
    authDomain: "picture-gallery-xd1.firebaseapp.com",
    projectId: "picture-gallery-xd1",
    storageBucket: "picture-gallery-xd1.appspot.com",
    messagingSenderId: "211808647290",
    appId: "1:211808647290:web:5bf6fa443c756fb79ca3c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //initialize storage
  const projectStorage=firebase.storage();
  //initialize firestore
  const projectFirestore= firebase.firestore();
  //import timeStamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  //export both
  export {projectStorage, projectFirestore, timestamp};