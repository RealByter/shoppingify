import { useContext, useEffect, useState } from "react";
import ShoppingListContext from "../../contexts/ShoppingListContext";
import SideCard from "../general/SideCard";
import categories from "../items/categories";
import ListCategory from "./ListCategory";
import shoppingCartIcon from "../../shoppingCart.svg";
import AddItemCta from "./AddItemCta";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { doc, updateDoc } from "firebase/firestore";
import { MdCreate } from "react-icons/md";
import Button from "../general/Button";
import Modal from "../general/Modal";

interface Props {
  onClose(): any;
}

const ShoppingList: React.FC<Props> = ({ onClose }) => {
  const { items, id } = useContext(ShoppingListContext);
  const firestore = useFirestore();
  const docRef = doc(firestore, "shoppingLists", id);
  const { data: shoppingListData } = useFirestoreDocData(docRef);
  const name = shoppingListData?.name;
  const [nameInput, setNameInput] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (name) setNameInput(name);
  }, [name]);

  return (
    <>
      <SideCard className="relative flex flex-col bg-[#e6d8c8] py-6">
        <AddItemCta />
        {items.length > 0 ? (
          <>
            <div className="mb-9 mt-8 flex items-center justify-between">
              <h4 className=" text-2xl font-bold text-gray-700">
                {name ? name : "Shopping list"}
              </h4>
              {!editMode && (
                <button
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  <MdCreate className="text-xl" />
                </button>
              )}
            </div>
            <div className="overflow-y-auto scrollbar-hide">
              {categories.map((category, index) => (
                <ListCategory
                  key={index}
                  editMode={editMode}
                  category={category}
                  items={items.filter((item) => item.category === category)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="relative flex grow flex-col items-center justify-end">
            <p className="relative -top-1/4 text-xl font-bold">No items</p>
            <img
              className="relative -bottom-3 z-10"
              src={shoppingCartIcon}
              alt="shopping cart"
            />
          </div>
        )}
        <div className="-mb-6 -ml-[4.32vw] mt-auto flex w-[calc(100%+8.64vw)] shrink-0 basis-24 items-center justify-center bg-white md:-ml-[3vw] md:w-[calc(100%+6vw)] xl:-ml-11 xl:w-[calc(100%+88px)]">
          {editMode ? (
            <form
              className={`flex h-[61px] w-11/12 items-center justify-between rounded-xl border-2 border-solid ${
                items.length === 0 ? "border-gray-400" : "border-primary"
              }`}
              onSubmit={(e) => {
                e.preventDefault();
                setEditMode(false);
                if (nameInput !== name)
                  updateDoc(docRef, {
                    name: nameInput,
                  });
              }}
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
                className="-mr-[1px] h-full w-[88px] rounded-lg bg-primary text-base font-bold text-white disabled:bg-gray-400"
                disabled={items.length === 0}
                type="submit"
              >
                Save
              </button>
            </form>
          ) : (
            <div className="mt-auto flex h-full items-center justify-center gap-6">
              <Button
                onClick={() => {
                  setModalOpen(true);
                }}
                textColor="text-black"
                color="bg-transparent"
                rippleColor="#dddddd"
              >
                Cancel
              </Button>
              <Button
                color="bg-cyan-400"
                onClick={() => {
                  updateDoc(docRef, {
                    status: "completed",
                    name: name ? name : "Shopping list",
                  });
                  setEditMode(true)
                }}
              >
                Complete
              </Button>
            </div>
          )}
        </div>
      </SideCard>
      <Modal
        title=""
        description=""
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <h3 className="-mt-3 text-2xl font-semibold text-gray-700">
          Are you sure that you want to cancel this list?
        </h3>
        <div className="mt-16 flex justify-end gap-2">
          <Button
            onClick={() => {
              setModalOpen(false);
            }}
            textColor="text-black"
            color="bg-transparent"
            rippleColor="#dddddd"
          >
            Cancel
          </Button>
          <Button
            color="bg-red-500"
            onClick={() => {
              updateDoc(docRef, {
                status: "cancelled",
              });
              setEditMode(true);
              setModalOpen(false);
            }}
          >
            &nbsp; Yes &nbsp;
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ShoppingList;
