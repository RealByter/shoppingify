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
      <h3 className="mb-4 mt-12 text-lg font-medium">{name}</h3>
      <div className="grid gap-x-2 gap-y-6 min-[375px]:grid-cols-[repeat(2,minmax(140px,1fr))] min-[482px]:grid-cols-[repeat(3,minmax(130px,1fr))] min-[700px]:grid-cols-[repeat(4,minmax(140px,1fr))] md:gap-x-5">
        {items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
