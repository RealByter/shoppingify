import { useContext } from "react";
import ItemInterface from "./Item.interface";
import ItemInfo from "./ItemInfo";
import Ripple from "../general/Ripple";
import ShownItemContext from "../../contexts/ShownItemContext";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import { MdAdd } from "react-icons/md";

const Item: React.FC<ItemInterface> = ({
  name,
  image,
  category,
  note,
  id,
  userId,
}) => {
  const { shownItem, setShownItem } = useContext(ShownItemContext);
  const { setShowingList, addItem } = useContext(ShoppingListContext);

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
            addItem({ id, userId, name, image, category, note });
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
