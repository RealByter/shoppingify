import { useContext } from "react";
import Item from "../items/Item.interface";
import ItemInfo from "../items/ItemInfo";
import Ripple from "./Ripple";
import ShownItemContext from "../../contexts/ShownItemContext";
import ShoppingListContext from "../../contexts/ShoppingListContext";

interface Props extends Item {
  display: boolean;
}

const ItemCard: React.FC<Props> = ({
  name,
  image,
  category,
  note,
  id,
  children,
  display,
}) => {
  const { shownItem, setShownItem } = useContext(ShownItemContext);
  const { setShowingList } = useContext(ShoppingListContext);

  return (
    <>
      <div className={`${display && "relative"} flex h-fit max-w-[182px] overflow-hidden rounded-xl bg-white text-sm font-medium shadow-[0px_2px_12px_rgba(0,0,0,0.05)] sm:text-base`}>
        <button
          onClick={() => {
            setShownItem(name);
            setShowingList(false);
          }}
          tabIndex={0}
          className={`${!display && "relative"} w-[70%] py-4 pl-4 text-left`}
        >
          {name}
          <Ripple color="#dddddd" duration={1000} />
        </button>
        {children}
      </div>
      <ItemInfo
        display={display}
        {...{ name, image, category, note, id }}
        isShowing={shownItem === name}
        onClose={() => {
          setShownItem("");
        }}
      />
    </>
  );
};

export default ItemCard;
