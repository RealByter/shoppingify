import { useContext } from "react";
import ItemInterface from "./Item.interface";
import Ripple from "../general/Ripple";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import { MdAdd } from "react-icons/md";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import ItemCard from "../general/ItemCard";

const Item: React.FC<ItemInterface> = ({ name, image, category, note, id }) => {
  const { setShowingList, id: listId } = useContext(ShoppingListContext);
  const firestore = useFirestore();

  return (
    <ItemCard {...{ name, image, category, note, id }} display={false}>
      <button
        className="relative flex grow justify-center pt-[17.5px]"
        onClick={() => {
          addDoc(collection(firestore, "listItems"), {
            itemId: id,
            listId,
            name,
            pcs: 1,
            completed: false,
            category,
          });
          setShowingList(true);
        }}
      >
        <MdAdd className="text-xl text-gray-400" />
        <Ripple color="#dddddd" duration={500} />
      </button>
    </ItemCard>
  );
};

export default Item;
