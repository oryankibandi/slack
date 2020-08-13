import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGR2d0R1_D2Oqfc2R3gASSRG0nwJvWH3g",
    authDomain: "slack-clone-kibandi1.firebaseapp.com",
    databaseURL: "https://slack-clone-kibandi1.firebaseio.com",
    projectId: "slack-clone-kibandi1",
    storageBucket: "slack-clone-kibandi1.appspot.com",
    messagingSenderId: "615289692570",
    appId: "1:615289692570:web:330e45f63ca5497cbcda23",
    measurementId: "G-R13VL5D2Z9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider}
export default db;
