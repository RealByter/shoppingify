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
    <div className="flex items-center rounded-xl bg-white h-[45px]">
      <MdDeleteOutline tabIndex={0} className="text-white flex items-center justify-center bg-primary rounded-xl h-full w-9 px-2.5 cursor-pointer" />
      <MdRemove tabIndex={0} className="text-primary mx-1 text-xl"/>
      <button
        onClick={() => {
          setIsEditing((oldState) => !oldState);
        }}
        className="w-[68px] h-8 rounded-3xl border-2 border-solid border-primary text-xs font-bold text-primary"
      >
        {item?.pcs} pcs
      </button>
      <MdAdd tabIndex={0} className="text-primary mx-1 text-xl"/>
    </div>
  );
};

export default PcsDisplay;
