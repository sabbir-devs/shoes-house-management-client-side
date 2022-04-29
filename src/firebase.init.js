import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey:process.evn.REACT_APP_apiKey,
  authDomain:process.evn.REACT_APP_authDomain,
  projectId:process.evn.REACT_APP_projectId,
  storageBucket:process.evn.REACT_APP_storageBucket,
  messagingSenderId:process.evn.REACT_APP_messagingSenderId,
  appId:process.evn.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;