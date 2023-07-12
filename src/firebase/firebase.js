import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI3Z9Jf5EtWPptgTBELccO_XWwQSlyYe4",
  authDomain: "moviprime-43436.firebaseapp.com",
  databaseURL: "https://moviprime-43436-default-rtdb.firebaseio.com",
  projectId: "moviprime-43436",
  storageBucket: "moviprime-43436.appspot.com",
  messagingSenderId: "897474671423",
  appId: "1:897474671423:web:1d690a2a6d0aeb3480598a",
  measurementId: "G-9NZMJPWMMK"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
