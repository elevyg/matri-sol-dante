import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyADnlQyC06ZRZsq1pYa8n3J8oUKnVOwU",
  authDomain: "matri-de483.firebaseapp.com",
  projectId: "matri-de483",
  storageBucket: "matri-de483.appspot.com",
  messagingSenderId: "205407944996",
  appId: "1:205407944996:web:45a1f679b8b8e3b70b73b1",
  measurementId: "G-NLGG0RMLDY",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFirestore();
