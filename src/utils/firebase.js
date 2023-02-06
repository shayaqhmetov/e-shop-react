import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhDt0XdgzBLukLZEgnTIk7Nm4JYOOLiI",
  authDomain: "shop-template-57b3a.firebaseapp.com",
  projectId: "shop-template-57b3a",
  storageBucket: "shop-template-57b3a.appspot.com",
  messagingSenderId: "648215393068",
  appId: "1:648215393068:web:cebf1178e4733f9115b289"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);