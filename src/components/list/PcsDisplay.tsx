import { useState, useEffect, useContext } from "react";
import { MdDeleteOutline, MdRemove, MdAdd } from "react-icons/md";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import ListItemInterface from "./ListItem.interface";

interface Props {
  name: string;
}

const PcsDisplay: React.FC<Props> = ({ name }) => {
  const { items } = useContext(ShoppingListContext);
  const [item, setItem] = useState<ListItemInterface | undefined>();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setItem(items.find((item) => item.name === name));
  }, []);

  return (
    <div
      className={`absolute right-0 flex items-center rounded-xl transition-colors delay-200 ${
        isEditing ? "bg-white" : "bg-transparent"
      }`}
    >
      <MdDeleteOutline
        tabIndex={+isEditing - 1}
        className={`flex h-[45px] origin-right transition-[padding,width,height] delay-200 duration-150 focus:outline-none focus-visible:outline-offset-0 focus-visible:outline-black ${
          isEditing ? "w-9 px-2.5" : "h-0 w-0 px-0"
        } mr-1 cursor-pointer items-center justify-center rounded-xl bg-primary text-white`}
      />
      <MdRemove
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
        tabIndex={+isEditing - 1}
        className={`cursor-pointer text-xl text-primary outline-none transition-[margin,width] duration-150 focus:outline-none focus-visible:outline-offset-0 focus-visible:outline-black ${
          isEditing ? "mx-1" : "mx-0 w-0"
        }`}
      />
    </div>
  );
};

export default PcsDisplay;
