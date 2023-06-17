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
    <div>
      <h3>{name}</h3>
      <div>
        {items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
