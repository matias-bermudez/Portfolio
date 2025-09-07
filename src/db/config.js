import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAtL1DcZaZK5f35R_0W_UsFN87TPQ7D978",
    authDomain: "portfolio-db-b5bcb.firebaseapp.com",
    projectId: "portfolio-db-b5bcb",
    storageBucket: "portfolio-db-b5bcb.firebasestorage.app",
    messagingSenderId: "366389499551",
    appId: "1:366389499551:web:81a2b62314ac6201f774aa"
};

export const app = initializeApp(firebaseConfig);
