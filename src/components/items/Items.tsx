import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";
import Category from "./Category";
import { DocumentData, collection, query, where } from "firebase/firestore";
import LoadingSpinner from "../general/LoadingSpinner";
import Item from "./Item.interface";

const categories = [
  "Fruit and vegetables",
  "Meat and Fish",
  "Beverages",
  "Sweets",
  "Pets",
];

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

  if (status === "loading") {
    return <LoadingSpinner loading />;
  }

  return (
    <div>
      {categories.map((category: string) => (
        <Category
          name={category}
          items={
            items.filter(
              (item: DocumentData) => item.category === category
            ) as Item[]
          }
        />
      ))}
    </div>
  );
};

export default Items;
