import SideCard from "../general/SideCard";

interface Props {
  onClose(): any;
}

const ShoppingList: React.FC<Props> = ({ onClose }) => {
  return <SideCard className="bg-[#e6d8c8] px-12 py-6"></SideCard>;
};

export default ShoppingList;
