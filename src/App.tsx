import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import RouteSwitch from "./components/navigation/RouteSwitch";
import "./App.css";
import ShoppingListContext from "./contexts/ShoppingListContext";
import ListItem from "./components/list/ListItem.interface";
import { useState } from "react";
import SideDrawer from "./components/general/SideDrawer";
import ShoppingList from "./components/list/ShoppingList";

const App = () => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [items, setItems] = useState<ListItem[]>([]);
  const [showingList, setShowingList] = useState(false);
  const [name, setName] = useState("");

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
            name,
            setName,
            removeItem,
            changePcs,
            showingList,
            setShowingList,
          }}
        >
          <RouteSwitch />
          <SideDrawer isShowing={showingList}>
            <ShoppingList
              onClose={() => {
                setShowingList(false);
              }}
            />
          </SideDrawer>
        </ShoppingListContext.Provider>
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default App;
