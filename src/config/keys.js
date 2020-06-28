import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyCj6khXbKixEtMNJTOXhNFJOcOIWYkZCrg",
    authDomain: "pppp-467eb.firebaseapp.com",
    databaseURL: "https://pppp-467eb.firebaseio.com",
    projectId: "pppp-467eb",
    storageBucket: "pppp-467eb.appspot.com",
    messagingSenderId: "225052123374",
    appId: "1:225052123374:web:da05f1416161a0470053ff",
    measurementId: "G-GMV5TGDNWN"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
 

  export default firebase;