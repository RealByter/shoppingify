import { useContext } from "react";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import SideCard from "../general/SideCard";
import categories from "../items/categories";
import ListCategory from "./ListCategory";
import Input from "../general/Input";

interface Props {
  onClose(): any;
}

const ShoppingList: React.FC<Props> = ({ onClose }) => {
  const { items, name } = useContext(ShoppingListContext);

  return (
    <SideCard className="bg-[#e6d8c8] px-12 py-6">
      <div>{/* TODO: Make the Add item cta */}</div>
      <h4>{name}</h4>
      <div>
        {categories.map((category) => (
          <ListCategory
            items={items.filter((item) => item.category === category)}
          />
        ))}
      </div>
      <div>{/* name input */}</div>
    </SideCard>
  );
};

export default ShoppingList;
