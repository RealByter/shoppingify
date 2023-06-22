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
import Item from "./components/items/Item.interface";
import { HashRouter } from "react-router-dom";

const App = () => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [items, setItems] = useState<ListItem[]>([]);
  const [showingList, setShowingList] = useState(false);
  const [name, setName] = useState("");

  const addItem = (item: Item) => {
    if (!items.find((i) => i.name === item.name))
      setItems((items: ListItem[]) => [...items, { ...item, pcs: 1 }]);
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
          <HashRouter basename={import.meta.env.DEV ? "/" : "/shoppingify/"}>
            <SideDrawer isShowing={showingList}>
              <ShoppingList
                onClose={() => {
                  setShowingList(false);
                }}
              />
            </SideDrawer>
            <RouteSwitch />
          </HashRouter>
        </ShoppingListContext.Provider>
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default App;
