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
    <div className={`flex items-center rounded-xl absolute right-0 transition-colors delay-200 ${isEditing ? 'bg-white' : 'bg-transparent'}`}>
      <MdDeleteOutline
        tabIndex={0}
        className={`flex h-[45px] origin-right transition-all duration-150 delay-200 ${isEditing ? 'w-9 px-2.5' : "w-0 px-0 h-0"} mr-1 cursor-pointer items-center justify-center rounded-xl bg-primary text-white`}
      />
      <MdRemove tabIndex={0} className={`text-xl" mx-1 text-primary transition-all duration-150 delay-100 ${isEditing ? 'mx-1' : "mx-0 w-0"}`} />
      <button
        onClick={() => {
          setIsEditing((oldState) => !oldState);
        }}
        className={`h-8 w-[68px] rounded-3xl border-2 border-solid border-primary text-xs font-bold text-primary`}
      >
        {item?.pcs} pcs
      </button>
      <MdAdd tabIndex={0} className={`text-xl text-primary transition-all duration-150 ${isEditing ? 'mx-1' : "mx-0 w-0"}`} />
    </div>
  );
};

export default PcsDisplay;
