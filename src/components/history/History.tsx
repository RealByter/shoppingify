import { collection, orderBy, query, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import LoadingSpinner from "../general/LoadingSpinner";
import HistoryRecord from "./HistoryRecord";

const History = () => {
  const firestore = useFirestore();
  const listsQuery = query(
    collection(firestore, "shoppingLists"),
    orderBy("at", "desc")
  );
  const { status, data: lists } = useFirestoreCollectionData(listsQuery, {
    idField: "id",
  });

  if (status === "loading") return <LoadingSpinner loading={true} />;

  return (
    <div>
      {lists.map(
        (list) =>
          list.status !== "ongoing" && (
            <HistoryRecord
              key={list.id}
              id={list.id}
              name={list.name}
              at={list.at}
              completed={list.status === "completed"}
            />
          )
      )}
    </div>
  );
};

export default History;
