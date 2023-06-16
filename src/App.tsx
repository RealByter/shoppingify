import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import RouteSwitch from "./RouteSwitch";

const App = () => {
  const app = useFirebaseApp();

  const firestore = getFirestore(app);
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <RouteSwitch />
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default App;
