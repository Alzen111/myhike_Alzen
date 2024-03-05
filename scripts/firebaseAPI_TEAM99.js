//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAM9HJQuFVsmLYq0ntagBmu0IwmxndUpWg",
    authDomain: "comp1800-202410-demo-5b15c.firebaseapp.com",
    projectId: "comp1800-202410-demo-5b15c",
    storageBucket: "comp1800-202410-demo-5b15c.appspot.com",
    messagingSenderId: "259056763502",
    appId: "1:259056763502:web:f55724d70b843e5462dc7f",
    measurementId: "G-G7ZB8VJC27"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
