import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuytkeJfv_R-hBBkyVJAsLcdsYhoOzRL8",
  authDomain: "netflix-clone-c9377.firebaseapp.com",
  projectId: "netflix-clone-c9377",
  storageBucket: "netflix-clone-c9377.appspot.com",
  messagingSenderId: "764902692574",
  appId: "1:764902692574:web:438698fc5995128f6cd44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;   