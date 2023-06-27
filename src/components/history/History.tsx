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
    <div className="mx-auto max-w-4xl pt-4 bg-white sm:w-[80vw] sm:bg-transparent">
      <h2 className="ml-3 mb-4 text-xl font-bold sm:m-0 sm:my-10 sm:text-2xl">
        Shopping history
      </h2>
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
    </div>
  );
};

export default History;
