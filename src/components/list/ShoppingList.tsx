import { useContext, useEffect, useState } from "react";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import SideCard from "../general/SideCard";
import categories from "../items/categories";
import ListCategory from "./ListCategory";
import shoppingCartIcon from "../../shoppingCart.svg";
import AddItemCta from "./AddItemCta";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
} from "reactfire";
import { doc, updateDoc } from "firebase/firestore";

interface Props {
  onClose(): any;
}

const ShoppingList: React.FC<Props> = ({ onClose }) => {
  const { items, id } = useContext(ShoppingListContext);
  const firestore = useFirestore();
  const docRef = doc(firestore, "shoppingLists", id);
  const { status, data: shoppingListData } = useFirestoreDocData(docRef);
  const name = shoppingListData?.name;
  const [nameInput, setNameInput] = useState("");
  const [editMode, setEditMode] = useState(true);

  useEffect(() => {
    setNameInput(name);
  }, [name]);

  return (
    <SideCard className="relative flex flex-col bg-[#e6d8c8] py-6">
      <AddItemCta />
      {items.length > 0 ? (
        <>
          <h4 className="mb-9 mt-8 text-2xl font-bold text-gray-700">
            {name ? name : "Shopping list"}
          </h4>
          <div className="overflow-y-auto scrollbar-hide">
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
          <p className="relative -top-32 text-xl font-bold">No items</p>
          <img
            className="absolute bottom-16 z-10"
            src={shoppingCartIcon}
            alt="shopping cart"
          />
        </div>
      )}
      <div className="-mb-6 -ml-[4.32vw] mt-auto flex w-[calc(100%+8.64vw)] shrink-0 basis-24 items-center justify-center bg-white md:-ml-[3vw] md:w-[calc(100%+6vw)] xl:-ml-11 xl:w-[calc(100%+88px)]">
        {editMode ? (
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
              onClick={() => {
                updateDoc(docRef, {
                  name: nameInput,
                });
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </SideCard>
  );
};

export default ShoppingList;
