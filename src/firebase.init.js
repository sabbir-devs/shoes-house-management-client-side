import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBWSkyBrwu_yGpLHowKh3jecLNuEt4Ht0E",
  authDomain: "warehouse-68b1a.firebaseapp.com",
  projectId: "warehouse-68b1a",
  storageBucket: "warehouse-68b1a.appspot.com",
  messagingSenderId: "885481444266",
  appId: "1:885481444266:web:8f589b5b5b0f5f3758d1d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;