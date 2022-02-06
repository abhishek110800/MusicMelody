import firebase from "firebase";
import "firebase/storage";

// THIS COMPONENT IS FOR DETAILS OF SOUNDRULE PROJECT IN FIREBASE

var firebaseConfig = {
  apiKey: "AIzaSyCnZEAv58Tb1N0mbkLrELwPoIvX-IJoPRE",
  authDomain: "musicmelody-68351.firebaseapp.com",
  projectId: "musicmelody-68351",
  storageBucket: "musicmelody-68351.appspot.com",
  messagingSenderId: "801568893210",
  appId: "1:801568893210:web:40db87278f58cd307b24a3",
  measurementId: "G-MLD45BPRZM"
}

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
