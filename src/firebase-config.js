import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBn65DQptXYRLvczuN8HcF52FTUPHvkqDc",
    authDomain: "menuapp-ea6ce.firebaseapp.com",
    projectId: "menuapp-ea6ce",
    storageBucket: "menuapp-ea6ce.appspot.com",
    messagingSenderId: "468174023027",
    appId: "1:468174023027:web:ed4e39b9197eeae4db3d06",
    measurementId: "G-GG0ZN73RMS"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);