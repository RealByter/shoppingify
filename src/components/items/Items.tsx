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

  if (status === "loading") {
    return <LoadingSpinner loading />;
  }

  const checkIfItemExists = (name: string): boolean => {
    return !!items.find((item) => item.name === name);
  };

  return (
    <>
      <div className="mx-auto max-w-3xl p-3">
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
      </div>
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
        />
      </SideDrawer>
    </>
  );
};

export default Items;
