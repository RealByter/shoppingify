import { useContext, useState } from "react";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import SideCard from "../general/SideCard";
import categories from "../items/categories";
import ListCategory from "./ListCategory";
import shoppingCartIcon from "../../shoppingCart.svg";
import AddItemCta from "./AddItemCta";

interface Props {
  onClose(): any;
}

const ShoppingList: React.FC<Props> = ({ onClose }) => {
  const { items, name } = useContext(ShoppingListContext);
  const [nameInput, setNameInput] = useState("");

  return (
    <SideCard className="relative flex flex-col bg-[#e6d8c8] py-6">
      <AddItemCta />
      {items.length > 0 ? (
        <>
          <h4 className="mb-9 mt-8 text-2xl font-bold text-gray-700">
            {name ? name : "Shopping list"}
          </h4>
          <div>
            {categories.map((category, index) => (
              <ListCategory
                key={index}
                category={category}
                items={items.filter((item) => item.category === category)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="relative flex grow flex-col items-center justify-center">
          <p className="text-xl font-bold relative -top-32">No items</p>
          <img
            className="absolute z-10 bottom-16"
            src={shoppingCartIcon}
            alt="shopping cart"
          />
        </div>
      )}
      <div className="absolute bottom-0 left-0 flex h-24 w-full items-center justify-center bg-white">
        <div
          className={`flex h-[61px] w-11/12 items-center justify-between rounded-xl border-2 border-solid ${
            items.length === 0 ? "border-gray-400" : "border-primary"
          }`}
        >
          <input
            className="m-5 grow bg-transparent text-sm focus-visible:outline-none"
            placeholder="Enter a name"
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            disabled={items.length === 0}
          />
          <button
            className="h-full w-[87px] rounded-lg bg-primary text-base font-bold text-white disabled:bg-gray-400"
            disabled={items.length === 0}
          >
            Save
          </button>
        </div>
      </div>
    </SideCard>
  );
};

export default ShoppingList;
