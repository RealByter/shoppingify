import { useState, useEffect, useContext } from "react";
import { MdDeleteOutline, MdRemove, MdAdd } from "react-icons/md";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import ListItemInterface from "./ListItem.interface";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";

interface Props {
  id: string;
}

const PcsDisplay: React.FC<Props> = ({ id }) => {
  const { id: listId } = useContext(ShoppingListContext);
  const [isEditing, setIsEditing] = useState(false);
  const firestore = useFirestore();
  const { data: item } = useFirestoreDocData(
    doc(firestore, `shoppingLists/${listId}/listItems`, id)
  );

  return (
    <div
      className={`absolute right-0 flex items-center rounded-xl transition-colors ${
        isEditing ? "bg-white delay-100" : "bg-transparent delay-200"
      }`}
    >
      <MdDeleteOutline
        onClick={() => {
          if (item) {
            deleteDoc(
              doc(firestore, `shoppingLists/${listId}/listItems`, item.id)
            );
          }
        }}
        tabIndex={+isEditing - 1}
        className={`flex h-[45px] origin-right transition-[padding,width,height,background-color] delay-200 duration-150 focus:outline-none focus-visible:outline-offset-0 focus-visible:outline-black ${
          isEditing ? "w-9 bg-primary px-2.5" : "h-0 w-0 bg-transparent px-0"
        } mr-1 cursor-pointer items-center justify-center rounded-xl text-white`}
      />
      <MdRemove
        onClick={() => {
          if (item && item.pcs > 1) {
            updateDoc(
              doc(firestore, `shoppingLists/${listId}/listItems`, item.id),
              {
                pcs: item.pcs - 1,
              }
            );
          }
        }}
        tabIndex={+isEditing - 1}
        className={`mx-1 cursor-pointer text-xl text-primary outline-none transition-[margin,width] delay-100 duration-150 focus:outline-none focus-visible:outline-offset-0 focus-visible:outline-black ${
          isEditing ? "mx-1" : "mx-0 w-0"
        }`}
      />
      <button
        onClick={() => {
          setIsEditing((oldState) => !oldState);
        }}
        className={`h-8 w-[68px] rounded-3xl border-2 border-solid border-primary text-xs font-bold text-primary`}
      >
        {item?.pcs} pcs
      </button>
      <MdAdd
        onClick={() => {
          if (item) {
            updateDoc(
              doc(firestore, `shoppingLists/${listId}/listItems`, item.id),
              {
                pcs: item.pcs + 1,
              }
            );
          }
        }}
        tabIndex={+isEditing - 1}
        className={`cursor-pointer text-xl text-primary outline-none transition-[margin,width] duration-150 focus:outline-none focus-visible:outline-offset-0 focus-visible:outline-black ${
          isEditing ? "mx-1" : "mx-0 w-0"
        }`}
      />
    </div>
  );
};

export default PcsDisplay;
