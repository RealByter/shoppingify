import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import ItemCard from "../general/ItemCard";

interface Props {
  id: string;
  pcs: number;
}

const HistoryItem: React.FC<Props> = ({ id, pcs }) => {
  const firestore = useFirestore();
  const { data: item } = useFirestoreDocData(doc(firestore, "items", id));

  return (
    <ItemCard
      display={true}
      id={id}
      name={item?.name}
      category={item?.category}
      note={item?.note}
      image={item?.image}
    >
      <p className="flex justify-end items-center ml-auto mr-4 text-primary font-bold text-sm">{pcs}</p>
    </ItemCard>
  );
};

export default HistoryItem;
