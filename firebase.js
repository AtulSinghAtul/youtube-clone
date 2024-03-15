import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8-LXLIfUSG33GsyGmi9QPSt48RaMJ_jE",
  authDomain: "clone-87d04.firebaseapp.com",
  projectId: "clone-87d04",
  storageBucket: "clone-87d04.appspot.com",
  messagingSenderId: "660917534946",
  appId: "1:660917534946:web:d5bd331b1d65fbd6109ebb",
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig.auth();
