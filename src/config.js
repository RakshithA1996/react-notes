import firebase from "firebase/app";

const DB_CONFIG = {
    apiKey: "AIzaSyASDxPd6LpWP-WjthvmGk1uAFsP1ur5N5s",
    authDomain: "react-notes-6d70c.firebaseapp.com",
    databaseURL: "https://react-notes-6d70c-default-rtdb.firebaseio.com",
    projectId: "react-notes-6d70c",
    storageBucket: "react-notes-6d70c.appspot.com",
    messagingSenderId: "90812847261",
    appId: "1:90812847261:web:c886f88229e2de256df074",
    measurementId: "G-R96KTCGE7V"
};

export default !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
