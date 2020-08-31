import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKqy2b2DkpvtLRzgpsjBBKSxuPgMPRD6w",
  authDomain: "bri-whatsappclone.firebaseapp.com",
  databaseURL: "https://bri-whatsappclone.firebaseio.com",
  projectId: "bri-whatsappclone",
  storageBucket: "bri-whatsappclone.appspot.com",
  messagingSenderId: "141647285140",
  appId: "1:141647285140:web:e9d111e3b218f047741d81",
  measurementId: "G-ZLXQZ4SJCZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize the app with firebaseconfig
const db = firebaseApp.firestore(); //accessing the firestore instance of the firebase(the database)
const auth = firebase.auth(); // ofr handling authentication
const provider = new firebase.auth.GoogleAuthProvider(); //goolge authentication

export { auth, provider };
export default db;
