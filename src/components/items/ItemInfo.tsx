import { MdArrowRightAlt } from "react-icons/md";
import SideCard from "../general/SideCard";
import SideDrawer from "../general/SideDrawer";
import ItemInterface from "./Item.interface";
import Button from "../general/Button";
import { collection, deleteDoc, doc, where } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { FirebaseError } from "firebase/app";

const SmallHeader: React.FC = ({ children }) => (
  <h4 className="mb-1 mt-6 text-xs font-medium text-gray-400">{children}</h4>
);

interface Props extends ItemInterface {
  isShowing: boolean;
  onClose(): any;
}

const ItemInfo: React.FC<Props> = ({
  id,
  image,
  name,
  category,
  note,
  isShowing,
  onClose,
}) => {
  const firestore = useFirestore();

  const onDelete = () => {
    deleteDoc(doc(firestore, "items", id)).catch((e) => {
      if (e instanceof FirebaseError) {
        //TODO: show error
      }
    });
  };

  return (
    <SideDrawer isShowing={isShowing}>
      <SideCard className="flex flex-col bg-white px-12 py-6">
        <button
          onClick={onClose}
          className="flex cursor-pointer gap-0.5 text-sm font-bold text-primary hover:underline"
        >
          <MdArrowRightAlt className="rotate-180 text-xl" /> back
        </button>
        {image && (
          <img
            src={image}
            alt=""
            className="mb-3 mt-6 aspect-[1.364/1] rounded-3xl"
          />
        )}
        <SmallHeader>name</SmallHeader>
        <p className="text-2xl font-medium">{name}</p>
        <SmallHeader>category</SmallHeader>
        <p className="text-lg font-medium">{category}</p>
        {note && (
          <>
            <SmallHeader>note</SmallHeader>
            <p className="max-h-[25%] overflow-y-scroll text-lg font-medium">
              {note}
            </p>
          </>
        )}
        <div className="mt-auto flex justify-center gap-6">
          <Button
            onClick={onDelete}
            textColor="text-black"
            color="bg-transparent"
            rippleColor="#dddddd"
          >
            Delete
          </Button>
          <Button type="submit">Add to list</Button>
        </div>
      </SideCard>
    </SideDrawer>
  );
};

export default ItemInfo;
