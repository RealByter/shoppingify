import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import Bottle from "../../bottle.svg";
import ShownItemContext from "../../contexts/ShownItemContext";

const AddItemCta = () => {
  const { setShowingList } = useContext(ShoppingListContext);
  const { setShownItem } = useContext(ShownItemContext);
  let history = useHistory();

  return (
    <div className="flex items-center justify-between gap-8 rounded-3xl bg-[#80485B] px-6">
      <img
        src={Bottle}
        alt="bottle"
        className="h-32 w-12 -translate-y-4 scale-[1.75]"
      />
      <div className="flex flex-col items-start gap-3">
        <p className="text-base font-bold text-white">
          Didn't find what you need?
        </p>
        <button
          onClick={() => {
            history.push("/items");
            setShownItem("");
            setShowingList(false);
          }}
          className="rounded-xl bg-white px-8 py-3 text-xs font-bold text-[#34333A]"
        >
          Add item
        </button>
      </div>
    </div>
  );
};

export default AddItemCta;
