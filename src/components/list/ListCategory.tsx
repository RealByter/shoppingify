import ListItem from "./ListItem";
import ListItemInterface from "./ListItem.interface";

interface Props {
  category: string;
  items: ListItemInterface[];
}

const ListCategory: React.FC<Props> = ({ category, items }) =>
  items.length ? (
    <div className="mb-12">
      <h4 className="text-sm text-[#828282]">{category}</h4>
      <div className="mt-6 flex flex-col gap-9">
        {items.map((item) => (
          <ListItem key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );

export default ListCategory;
