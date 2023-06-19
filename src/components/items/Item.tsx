import { useContext } from "react";
import ItemInterface from "./Item.interface";
import ItemInfo from "./ItemInfo";
import Ripple from "../general/Ripple";
import ShownItemContext from "./ShownItemContext";

const Item: React.FC<ItemInterface> = ({ name, image, category, note }) => {
  const { shownItem, setShownItem } = useContext(ShownItemContext);

  return (
    <>
      <div className="flex h-fit max-w-[182px] overflow-hidden rounded-xl bg-white pr-4 text-sm font-medium shadow-[0px_2px_12px_rgba(0,0,0,0.05)] sm:text-base">
        <p
          onClick={() => {
            setShownItem(name);
          }}
          tabIndex={0}
          className="relative max-w-[90%] grow cursor-pointer py-4 pl-4"
        >
          {name}
          <Ripple color="#dddddd" duration={1000} />
        </p>
      </div>
      <ItemInfo
        name={name}
        image={image}
        category={category}
        note={note}
        isShowing={shownItem === name}
        onClose={() => {
          setShownItem("");
        }}
      />
    </>
  );
};

export default Item;
