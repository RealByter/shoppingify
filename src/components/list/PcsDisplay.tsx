import { useState, useEffect, useContext } from "react";
import { MdDeleteOutline, MdRemove, MdAdd } from "react-icons/md";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import ListItemInterface from "./ListItem.interface";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";

interface Props {
  id: string;
  editMode: boolean;
}

const PcsDisplay: React.FC<Props> = ({ id, editMode }) => {
  const { id: listId } = useContext(ShoppingListContext);
  const [isEditing, setIsEditing] = useState(false);
  const firestore = useFirestore();
  const { data: item } = useFirestoreDocData(doc(firestore, `listItems`, id));

  useEffect(() => {
    setIsEditing(false);
  }, [editMode]);

  return (
    <div
      className={`absolute right-0 flex items-center rounded-xl transition-colors ${
        isEditing ? "bg-white delay-100" : "bg-transparent delay-200"
      }`}
    >
      <button
        onClick={() => {
          if (item) {
            deleteDoc(doc(firestore, "listItems", id));
          }
        }}
        className="group outline-none"
      >
        <MdDeleteOutline
          className={`flex h-[45px] origin-right transition-[padding,width,height,background-color] delay-200 duration-150 group-focus:outline-none group-focus-visible:outline-offset-0 group-focus-visible:outline-black ${
            isEditing ? "w-9 bg-primary px-2.5" : "h-0 w-0 bg-transparent px-0"
          } mr-1 cursor-pointer items-center justify-center rounded-xl text-white`}
        />
      </button>
      <button
        className="group outline-none"
        onClick={() => {
          if (item && item.pcs > 1) {
            updateDoc(doc(firestore, "listItems", id), {
              pcs: item.pcs - 1,
            });
          }
        }}
      >
        <MdRemove
          className={`mx-1 cursor-pointer rounded-sm text-xl text-primary transition-[margin,width] delay-100 duration-150 group-focus:outline-none group-focus-visible:outline-offset-0 group-focus-visible:outline-black ${
            isEditing ? "mx-1" : "mx-0 w-0"
          }`}
        />
      </button>
      <button
        onClick={() => {
          setIsEditing((oldState) => !oldState);
        }}
        disabled={!editMode}
        className={`h-8 w-[68px] rounded-3xl border-2 border-solid border-primary text-xs font-bold text-primary`}
      >
        {item?.pcs} pcs
      </button>
      <button
        className="group outline-none"
        onClick={() => {
          if (item) {
            updateDoc(doc(firestore, "listItems", id), {
              pcs: item.pcs + 1,
            });
          }
        }}
      >
        <MdAdd
          className={`cursor-pointer rounded-sm text-xl text-primary transition-[margin,width] duration-150 group-focus:outline-none group-focus-visible:outline-offset-0 group-focus-visible:outline-black ${
            isEditing ? "mx-1" : "mx-0 w-0"
          }`}
        />
      </button>
    </div>
  );
};

export default PcsDisplay;
