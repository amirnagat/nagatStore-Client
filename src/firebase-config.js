import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBx4eTvuvYpFQjSWgJ5dCEYwR8ZV6Fj7h0",
    authDomain: "nagatapp-c5a1c.firebaseapp.com",
    projectId: "nagatapp-c5a1c",
    storageBucket: "nagatapp-c5a1c.appspot.com",
    messagingSenderId: "29265162778",
    appId: "1:29265162778:web:235f633d7be729d815d7a3"
  };
  const app = initializeApp(firebaseConfig);;

 export const auth = getAuth(app);


