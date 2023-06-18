import { collection, query, where } from "firebase/firestore";
import { useFirestore } from "reactfire";
import ItemInterface from "./Item.interface";
import Item from "./Item";

interface Props {
  name: string;
  items: ItemInterface[];
}

const Category: React.FC<Props> = ({ name, items }) => {
  if (items.length === 0) return <div></div>;

  return (
    <div className="p-3">
      <h3>{name}</h3>
      <div className="md: grid grid-cols-[repeat(2,minmax(140px,1fr))] gap-x-2 gap-y-6 min-[425px]:grid-cols-[repeat(3,minmax(140px,1fr))] md:grid-cols-[repeat(4,minmax(140px,1fr))]">
        {items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
