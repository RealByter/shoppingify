import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import FirebaseWrapper from "./components/FirebaseWrapper";

const firebaseConfig = {
  apiKey: "AIzaSyAltaAAbp3yed-PjevL5ASwWihJYeNCGU0",
  authDomain: "shoppingify-1bd7f.firebaseapp.com",
  projectId: "shoppingify-1bd7f",
  storageBucket: "shoppingify-1bd7f.appspot.com",
  messagingSenderId: "601698294825",
  appId: "1:601698294825:web:6a0e15be24181c41d8d038",
  measurementId: "G-BMQPZHF7V1",
};

ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseWrapper>
        <App />
      </FirebaseWrapper>
    </FirebaseAppProvider>,
  document.getElementById("root")
);
