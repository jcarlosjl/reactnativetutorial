import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCnyLPCdk4tNC6qe5BVmb9pRW6LhC68DYo",
    authDomain: "marvelbook-4c3b8.firebaseapp.com",
    databaseURL: "https://marvelbook-4c3b8.firebaseio.com",
    projectId: "marvelbook-4c3b8",
    storageBucket: "marvelbook-4c3b8.appspot.com",
    messagingSenderId: "628271583163"
};
firebase.initializeApp(config);

export const authenticateUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const registerUser = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const getCurrentUser = () => {
    return firebase.auth().getCurrentUser;
}