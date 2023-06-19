import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";
import Category from "./Category";
import { DocumentData, collection, query, where } from "firebase/firestore";
import LoadingSpinner from "../general/LoadingSpinner";
import Item from "./Item.interface";
import { useState } from "react";
import SideDrawer from "../general/SideDrawer";
import CreateItemButton from "./CreateItemButton";
import categories from "./categories";
import CreateItemForm from "./CreateItemForm";
import ShownItemContext from "./ShownItemContext";

const Items = () => {
  const { data: signInCheckResult } = useSigninCheck();
  const firestore = useFirestore();
  const itemsCollection = collection(firestore, "items");
  const itemsQuery = query(
    itemsCollection,
    where("userId", "==", signInCheckResult.user?.uid)
  );
  const { status, data: items } = useFirestoreCollectionData(itemsQuery, {
    idField: "id",
  });
  const [isShowing, setIsShowing] = useState(false);
  const [shownItem, setShownItem] = useState("");

  if (status === "loading") {
    return <LoadingSpinner loading />;
  }

  const checkIfItemExists = (name: string): boolean => {
    return !!items.find((item) => item.name === name);
  };

  return (
    <div className="md:grid md:grid-cols-[1fr,24rem]">
      <div className="max-w-4xl grow p-3">
        <ShownItemContext.Provider value={{ shownItem, setShownItem }}>
          {categories.map((category: string, index: number) => (
            <Category
              key={index}
              name={category}
              items={
                items.filter(
                  (item: DocumentData) => item.category === category
                ) as Item[]
              }
            />
          ))}
        </ShownItemContext.Provider>
      </div>
      <div className="md:hidden">
        <CreateItemButton
          onClick={() => {
            setIsShowing(true);
          }}
        />
        <SideDrawer isShowing={isShowing}>
          <CreateItemForm
            onClose={() => {
              setIsShowing(false);
            }}
            collectionRef={itemsCollection}
            doesItemExist={checkIfItemExists}
            userId={signInCheckResult.user?.uid}
          />
        </SideDrawer>
      </div>
      <div className="hidden justify-self-end md:block ">
        <CreateItemForm
          onClose={() => {
            setIsShowing(false);
          }}
          collectionRef={itemsCollection}
          doesItemExist={checkIfItemExists}
          userId={signInCheckResult.user?.uid}
        />
      </div>
    </div>
  );
};

export default Items;
