import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3pOj1Ex5Y95upo3WYO-LtlO9O3-H-usc",
//   authDomain: "skillset-verified.firebaseapp.com",
//   projectId: "skillset-verified",
//   storageBucket: "skillset-verified.appspot.com",
//   messagingSenderId: "75144383574",
//   appId: "1:75144383574:web:75af1487584a97169b7ff7",
//   measurementId: "G-REQXD214NH",
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWilERqxrPY6At9SasnT9hHKx2J630vzs",
  authDomain: "studofier.firebaseapp.com",
  projectId: "studofier",
  storageBucket: "studofier.appspot.com",
  messagingSenderId: "192630885795",
  appId: "1:192630885795:web:812eb83d8d652c36641e16"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const db = firebase.firestore();

export default firebase;
