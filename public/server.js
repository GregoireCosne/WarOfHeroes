// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjqtNc45CpLZtxcHN7VXkKXVYRD5A1mJw",
    authDomain: "war-of-heroes-246c7.firebaseapp.com",
    projectId: "war-of-heroes-246c7",
    storageBucket: "war-of-heroes-246c7.appspot.com",
    messagingSenderId: "679240267364",
    appId: "1:679240267364:web:8cb4d355ad4a05db6d9171",
    measurementId: "G-XCTS4XZYXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const form = document.querySelector('#login-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = form['email'].value;
    const password = form['password'].value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User logged in:', user);
        // Rediriger l'utilisateur vers une autre page ou effectuer d'autres actions après la connexion réussie
    } catch (error) {
        console.error('Error signing in:', error);
        // Gérer les erreurs d'authentification, par exemple, afficher un message d'erreur à l'utilisateur
    }
});
