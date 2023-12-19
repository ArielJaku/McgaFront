import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnVkf4-XHHw6tdlNG1zJWVD5M2xUTseCo",
    authDomain: "mis-clientes-66f36.firebaseapp.com",
    projectId: "mis-clientes-66f36",
    storageBucket: "mis-clientes-66f36.appspot.com",
    messagingSenderId: "628215411353",
    appId: "1:628215411353:web:2349ca4c2003c63ee73e08"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }