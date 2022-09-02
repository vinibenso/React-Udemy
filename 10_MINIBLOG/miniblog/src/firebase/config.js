import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi9re5A1lV929LUDBAeQUjkQynn4-eQDQ",
  authDomain: "miniblog-56799.firebaseapp.com",
  projectId: "miniblog-56799",
  storageBucket: "miniblog-56799.appspot.com",
  messagingSenderId: "1032382043036",
  appId: "1:1032382043036:web:141df292deb8da00e56e59"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db } 