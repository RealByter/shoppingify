import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import RouteSwitch from "./components/navigation/RouteSwitch";
import "./App.css";
import ShoppingListContext from "./components/list/ShoppingListContext";
import ListItem from "./components/list/ListItem.interface";
import { useState } from "react";

const App = () => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [items, setItems] = useState<ListItem[]>([]);
  const [showingList, setShowingList] = useState(false);

  const addItem = (item: ListItem) => {
    setItems((items: ListItem[]) => [...items, item]);
  };

  const removeItem = (id: string) => {
    setItems((items: ListItem[]) => items.filter((item) => item.id !== id));
  };

  const changePcs = (id: string, pcs: number) => {
    setItems((items: ListItem[]) =>
      items.map((item) => (item.id === id ? { ...item, pcs } : item))
    );
  };

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <ShoppingListContext.Provider
          value={{
            items,
            addItem,
            removeItem,
            changePcs,
            showingList,
            setShowingList,
          }}
        >
          <RouteSwitch />
        </ShoppingListContext.Provider>
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default App;
