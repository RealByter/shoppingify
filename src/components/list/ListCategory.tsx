import ListItem from "./ListItem.interface";

interface Props {
  category: string;
  items: ListItem[];
}

const ListCategory: React.FC<Props> = ({ category, items }) =>
  items.length ? (
    <div className="mb-12">
      <h4 className="text-sm text-[#828282]">{category}</h4>
      <div className="mt-6 flex flex-col gap-9">
        {items.map((item) => (
          <div className="flex justify-between">
            <p className="text-base font-semibold md:text-lg">{item.name}</p>
            <button className="text-xs font-bold text-primary border-2 border-solid border-primary rounded-3xl px-5 py-2">{item.pcs} pcs</button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );

export default ListCategory;
