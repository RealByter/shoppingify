import { useContext } from "react";
import ItemInterface from "./Item.interface";
import ItemInfo from "./ItemInfo";
import Ripple from "../general/Ripple";
import ShownItemContext from "../../contexts/ShownItemContext";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import { MdAdd } from "react-icons/md";
import { doc, setDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";

const Item: React.FC<ItemInterface> = ({
  name,
  image,
  category,
  note,
  id,
  userId,
}) => {
  const { shownItem, setShownItem } = useContext(ShownItemContext);
  const { setShowingList, id: listId } = useContext(ShoppingListContext);
  const firestore = useFirestore();

  return (
    <>
      <div className="flex h-fit max-w-[182px] overflow-hidden rounded-xl bg-white text-sm font-medium shadow-[0px_2px_12px_rgba(0,0,0,0.05)] sm:text-base">
        <button
          onClick={() => {
            setShownItem(name);
            setShowingList(false);
          }}
          tabIndex={0}
          className="relative w-[70%] py-4 pl-4 text-left"
        >
          {name}
          <Ripple color="#dddddd" duration={1000} />
        </button>
        <button
          className="relative flex grow justify-center pt-[17.5px]"
          onClick={() => {
            setDoc(doc(firestore, `shoppingLists/${listId}/listItems`, id), {
              id,
              name,
              pcs: 1,
              completed: false,
              category
            });
            setShowingList(true);
          }}
        >
          <MdAdd className="text-xl text-gray-400" />
          <Ripple color="#dddddd" duration={500} />
        </button>
      </div>
      <ItemInfo
        {...{ name, image, category, note, id, userId }}
        isShowing={shownItem === name}
        onClose={() => {
          setShownItem("");
        }}
      />
    </>
  );
};

export default Item;
