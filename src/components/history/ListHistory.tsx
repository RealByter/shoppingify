import { collection, doc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
} from "reactfire";
import LoadingSpinner from "../general/LoadingSpinner";
import categories from "../items/categories";
import HistoryCategory from "./HistoryCategory";
import { MdArrowRightAlt } from "react-icons/md";
import DateDisplay from "./DateDisplay";

const ListHistory = () => {
  const { listId } = useParams();
  const navigate = useNavigate();
  const firestore = useFirestore();
  const { status: listStatus, data: list } = useFirestoreDocData(
    doc(firestore, `shoppingLists/${listId}`)
  );
  const { status: itemsStatus, data: listItems } = useFirestoreCollectionData(
    collection(firestore, `shoppingLists/${listId}/listItems`),
    { idField: "id" }
  );

  if (listStatus === "loading" || itemsStatus === "loading")
    return <LoadingSpinner loading={true} />;

  return (
    <div className="md:grid md:grid-cols-[1fr,24rem]">
      <div className="max-w-4xl p-3">
        <button
          onClick={() => {
            navigate("/history");
          }}
          className="mx-auto mt-4 flex w-full max-w-3xl cursor-pointer gap-0.5 text-sm font-bold text-primary hover:underline"
        >
          <MdArrowRightAlt className="rotate-180 text-xl" /> back
        </button>
        <h2 className="mx-auto mb-1 mt-6 text-2xl font-bold sm:mb-2 sm:mt-8 sm:text-3xl w-full max-w-3xl">
          {list.name}
        </h2>
        <div className="mx-auto w-full max-w-3xl">
        <DateDisplay at={list.at} />
        </div>
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
