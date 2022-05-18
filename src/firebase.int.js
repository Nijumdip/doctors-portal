import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
   
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
 
  /* apiKey: "AIzaSyAJ0BF-p0fXh0plX0E-POjN8MeWynoA3CQ",
  authDomain: "doctors-portal-e6969.firebaseapp.com",
  projectId: "doctors-portal-e6969",
  storageBucket: "doctors-portal-e6969.appspot.com",
  messagingSenderId: "264568266042",
  appId: "1:264568266042:web:958172b893e38e2fbb0403", */

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


