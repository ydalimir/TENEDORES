import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB8MESghhYpOWa6JJeut5V_to7PgFRgWxU",
    authDomain: "tenedores-11313.firebaseapp.com",
    databaseURL: "https://tenedores-11313.firebaseio.com",
    projectId: "tenedores-11313",
    storageBucket: "tenedores-11313.appspot.com",
    messagingSenderId: "866267529250",
    appId: "1:866267529250:web:c5fadf56469ceedb4a0a7b"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
