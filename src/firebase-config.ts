import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAltaAAbp3yed-PjevL5ASwWihJYeNCGU0",
  authDomain: "shoppingify-1bd7f.firebaseapp.com",
  projectId: "shoppingify-1bd7f",
  storageBucket: "shoppingify-1bd7f.appspot.com",
  messagingSenderId: "601698294825",
  appId: "1:601698294825:web:6a0e15be24181c41d8d038",
  measurementId: "G-BMQPZHF7V1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const usersCollection = collection(db, "users");
export const getUserDocById = (id: string) => doc(db, "users", id);
export const categoriesCollection = collection(db, "categories");
