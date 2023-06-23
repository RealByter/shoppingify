import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";

const FirebaseWrapper: React.FC = ({ children }) => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
    </AuthProvider>
  );
};

export default FirebaseWrapper;
