import ItemInterface from "./Item.interface";

const Item: React.FC<ItemInterface> = ({ name, image, category, note }) => {
  return (
    <div className="flex h-fit items-start rounded-xl bg-white p-4 text-sm font-medium shadow-[0px_2px_12px_rgba(0,0,0,0.05)] sm:text-base">
      <span className="max-w-[80%]">{name}</span>
    </div>
  );
};

export default Item;
