import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import ShoppingListContext from "../../contexts/ShoppingListContext";

const ShoppingCart = () => {
  const { items, setShowingList } = useContext(ShoppingListContext);

  return (
    <button
      className="relative bottom-6 mx-auto cursor-pointer"
      onClick={() => setShowingList((oldState: boolean) => !oldState)}
    >
      <MdOutlineShoppingCart className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 text-white" />
      <span className="absolute -right-1 -top-1 rounded-md bg-[#EB5757] px-1.5 py-0.5 text-xs font-medium text-white">
        {items.length}
      </span>
    </button>
  );
};

export default ShoppingCart;
