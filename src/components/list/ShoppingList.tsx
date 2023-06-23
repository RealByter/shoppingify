import { useContext } from "react";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import SideCard from "../general/SideCard";
import categories from "../items/categories";
import ListCategory from "./ListCategory";
import Input from "../general/Input";
import AddItemCta from "./AddItemCta";

interface Props {
  onClose(): any;
}

const ShoppingList: React.FC<Props> = ({ onClose }) => {
  const { items, name } = useContext(ShoppingListContext);

  return (
    <SideCard className="bg-[#e6d8c8] py-6">
      <AddItemCta />
      <h4 className="text-gray-700 font-bold text-2xl mt-8 mb-9">{name ? name : "Shopping list"}</h4>
      <div>
        {categories.map((category, index) => (
          <ListCategory
            key={index}
            category={category}
            items={items.filter((item) => item.category === category)}
          />
        ))}
      </div>
      <div>{/* name input */}</div>
    </SideCard>
  );
};

export default ShoppingList;
