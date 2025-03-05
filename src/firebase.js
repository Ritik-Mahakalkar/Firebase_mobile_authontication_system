import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD-mqdkRteRE1MN6WA-YW01sVc8Mizo-bk",
    authDomain: "otp-react-d432c.firebaseapp.com",
    projectId: "otp-react-d432c",
    storageBucket: "otp-react-d432c.firebasestorage.app",
    messagingSenderId: "1097120408594",
    appId: "1:1097120408594:web:117b328d2f4e4285a324cb",
    measurementId: "G-ZJKXGK00M0"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;