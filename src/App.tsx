import RouteSwitch from "./components/navigation/RouteSwitch";
import "./App.css";
import ShoppingListContext from "./contexts/ShoppingListContext";
import ListItem from "./components/list/ListItem.interface";
import { useEffect, useState } from "react";
import SideDrawer from "./components/general/SideDrawer";
import ShoppingList from "./components/list/ShoppingList";
import Item from "./components/items/Item.interface";
import { HashRouter } from "react-router-dom";
import ShownItemContext from "./contexts/ShownItemContext";
import { collection, doc, query, setDoc, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

const App = () => {
  const firestore = useFirestore();
  const shoppingListQuery = query(
    collection(firestore, "shoppingLists"),
    where("status", "==", "ongoing")
  );
  const { status: shoppingListStatus, data: shoppingLists } =
    useFirestoreCollectionData(shoppingListQuery, { idField: "id" });
  const listItemsRef =
    shoppingListStatus === "success" && shoppingLists.length > 0
      ? collection(firestore, `shoppingLists/${shoppingLists[0].id}/listItems`)
      : collection(firestore, "empty");
  const { status: itemsStatus, data: listItems } = useFirestoreCollectionData(
    listItemsRef,
    {
      idField: "id",
    }
  );
  const [showingList, setShowingList] = useState(false);
  const [shownItem, setShownItem] = useState("");

  useEffect(() => {
    if (shoppingListStatus === "success") {
      if (shoppingLists.length === 0) {
        setDoc(doc(firestore, "shoppingLists"), {
          name: "",
          status: "ongoing",
        });
      }
    }
  }, [shoppingListStatus, shoppingLists]);

  return (
    <ShoppingListContext.Provider
      value={{
        name:
          shoppingListStatus === "success" && shoppingLists.length > 0
            ? shoppingLists[0].name
            : "",
        id:
          shoppingListStatus === "success" && shoppingLists.length > 0
            ? shoppingLists[0].id
            : "",
        items:
          itemsStatus === "success" && listItems
            ? (listItems as ListItem[])
            : [],
        showingList,
        setShowingList,
      }}
    >
      <ShownItemContext.Provider value={{ shownItem, setShownItem }}>
        <HashRouter basename={import.meta.env.DEV ? "/" : "/shoppingify/"}>
          <SideDrawer isShowing={showingList} zIndex={30}>
            <ShoppingList
              onClose={() => {
                setShowingList(false);
              }}
            />
          </SideDrawer>
          <RouteSwitch />
        </HashRouter>
      </ShownItemContext.Provider>
    </ShoppingListContext.Provider>
  );
};

export default App;
