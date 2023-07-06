import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";
import TopCategories from "./TopCategories";
import TopItems from "./TopItems";
import MonthlySummary from "./MonthlySummary";
import { collection, query, where } from "firebase/firestore";
import ListItem from "../list/ListItem.interface";
import LoadingSpinner from "../general/LoadingSpinner";

const Statistics = () => {
  const { data: signInCheckResult } = useSigninCheck();
  const firestore = useFirestore();
  const { status: listsStatus, data: lists } = useFirestoreCollectionData(
    query(
      collection(firestore, "shoppingLists"),
      where("status", "==", "completed"),
      where("userId", "==", signInCheckResult.user?.uid)
    ),
    { idField: "id" }
  );
  const listIds = listsStatus === "success" && lists.map((list) => list.id);
  const itemsQuery =
    listsStatus === "loading"
      ? collection(firestore, "empty")
      : query(
          collection(firestore, "listItems"),
          where("listId", "in", listIds)
        );
  const { status: itemsStatus, data: itemsData } = useFirestoreCollectionData(
    itemsQuery,
    { idField: "id" }
  );
  const items = itemsData as ListItem[];

  if (listsStatus === "loading" || itemsStatus === "loading")
    return <LoadingSpinner loading={true} />;

  return (
    <div className="md:grid md:grid-cols-[1fr,24rem]">
      <div className="mx-auto flex max-w-4xl flex-wrap gap-x-[4vw] gap-y-8 p-3">
        <TopItems items={items} />
        <TopCategories items={items} />
        <MonthlySummary items={items} />
      </div>
    </div>
  );
};

export default Statistics;
