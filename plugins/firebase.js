import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDoFTqySQEF9QNE65QuFnxldQQ-MX7mSxY",
  authDomain: "blog-app-b33c9.firebaseapp.com",
  databaseURL: "https://blog-app-b33c9.firebaseio.com",
  projectId: "blog-app-b33c9",
  storageBucket: "blog-app-b33c9.appspot.com",
  messagingSenderId: "274263967495",
  appId: "1:274263967495:web:dc479b6168043cd8b5a7a2",
  measurementId: "G-7XSWZZC287"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase
