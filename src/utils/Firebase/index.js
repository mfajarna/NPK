import * as firebase from "firebase";

const config ={
  apiKey: "AIzaSyCT5JzI_0ysr5XqnpZ4KEEgvKTbeZSZhX8",
  authDomain: "raspi1-15696.firebaseapp.com",
  databaseURL: "https://raspi1-15696-default-rtdb.firebaseio.com",
  projectId: "raspi1-15696",
  storageBucket: "raspi1-15696.appspot.com",
  messagingSenderId: "864104542667",
  appId: "1:864104542667:web:be048197ebd0c0e538464e",
  measurementId: "G-E0KRX2Q03Y"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
