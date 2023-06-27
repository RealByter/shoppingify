import { collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import LoadingSpinner from "../general/LoadingSpinner";
import categories from "../items/categories";
import HistoryCategory from "./HistoryCategory";

const ListHistory = () => {
  const { listId } = useParams();
  const firestore = useFirestore();
  const { status, data: listItems } = useFirestoreCollectionData(
    collection(firestore, `shoppingLists/${listId}/listItems`),
    { idField: "id" }
  );

  if (status === "loading") return <LoadingSpinner loading={true} />;

  return (
    <div className="md:grid md:grid-cols-[1fr,24rem]">
      <div className="max-w-4xl grow p-3">
        {categories.map((category, index) => (
          <HistoryCategory
            key={index}
            name={category}
            items={listItems
              .filter((item) => item.category === category)
              .map((item) => ({ id: item.id, pcs: item.pcs }))}
          />
        ))}
      </div>
    </div>
  );
};

export default ListHistory;
