import ItemInterface from "./Item.interface";
import Item from "./Item";
import CategoryGrid from "../general/CategoryGrid";

interface Props {
  name: string;
  items: ItemInterface[];
}

const Category: React.FC<Props> = ({ name, items }) => {
  if (items.length === 0) return <div></div>;

  return (
    <CategoryGrid name={name}>
      {items.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </CategoryGrid>
  );
};

export default Category;
