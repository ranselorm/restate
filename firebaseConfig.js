// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL9csCXzm75SUKv9irapXiXSXUa76Kxt8",
  authDomain: "your-app.firebaseapp.com",
  projectId: "restate-c6d9c",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
