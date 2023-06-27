import { doc, updateDoc } from "firebase/firestore";
import PcsDisplay from "./PcsDisplay";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { useContext } from "react";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import { MdCheck } from "react-icons/md";

interface Props {
  name: string;
  id: string;
  editMode: boolean;
}

const ListItem: React.FC<Props> = ({ name, id, editMode }) => {
  const { id: listId } = useContext(ShoppingListContext);
  const firestore = useFirestore();
  const docRef = doc(firestore, `shoppingLists/${listId}/listItems`, id);
  const { data: listItemData } = useFirestoreDocData(docRef);

  return (
    <div className="relative flex h-[45px] items-center justify-between">
      <div className="flex items-center">
        {!editMode && (
          <button
            className="mr-2 h-5 w-5 rounded-[4px] border-2 border-solid border-primary"
            onClick={() => {
              updateDoc(docRef, {
                completed: !listItemData.completed,
              });
            }}
          >
            {listItemData?.completed && <MdCheck className="text-primary h-5 w-5 -ml-[1.5px] -mt-[1px]" />}
          </button>
        )}
        <p className="text-base font-semibold md:text-lg">{name}</p>
      </div>
      <PcsDisplay id={id} />
    </div>
  );
};

export default ListItem;
