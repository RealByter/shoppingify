import RouteSwitch from "./components/navigation/RouteSwitch";
import "./App.css";
import ShoppingListContext from "./contexts/ShoppingListContext";
import ListItem from "./components/list/ListItem.interface";
import { useEffect, useState } from "react";
import SideDrawer from "./components/general/SideDrawer";
import ShoppingList from "./components/list/ShoppingList";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ShownItemContext from "./contexts/ShownItemContext";
import { addDoc, collection, query, where } from "firebase/firestore";
import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";

const App = () => {
  const firestore = useFirestore();
  const { status: userStatus, data: signInCheckResult } = useSigninCheck();

  const shoppingListCollection =
    userStatus === "loading" || !signInCheckResult.signedIn
      ? collection(firestore, "empty")
      : query(
          collection(firestore, "shoppingLists"),
          where("status", "==", "ongoing"),
          where("userId", "==", signInCheckResult.user?.uid)
        );
  const { status: shoppingListStatus, data: shoppingLists } =
    useFirestoreCollectionData(shoppingListCollection, { idField: "id" });
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
      if (shoppingLists.length === 0 && signInCheckResult.signedIn) {
        addDoc(collection(firestore, "shoppingLists"), {
          userId: signInCheckResult.user?.uid,
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
            : "empty",
        userId:
          shoppingListStatus === "success" && shoppingLists.length > 0
            ? shoppingLists[0].userId
            : "empty",
        items:
          itemsStatus === "success" && listItems
            ? (listItems as ListItem[])
            : [],
        showingList,
        setShowingList,
      }}
    >
      <ShownItemContext.Provider value={{ shownItem, setShownItem }}>
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/shoppingify/"}>
          <SideDrawer isShowing={showingList} zIndex={30}>
            <ShoppingList
              onClose={() => {
                setShowingList(false);
              }}
            />
          </SideDrawer>
          <RouteSwitch />
        </BrowserRouter>
      </ShownItemContext.Provider>
    </ShoppingListContext.Provider>
  );
};

export default App;
