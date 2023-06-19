import ItemInterface from "./Item.interface";

const Item: React.FC<ItemInterface> = ({ name, image, category, note }) => {
  return (
    <div className="flex h-fit max-w-[182px] rounded-xl bg-white pr-4 text-sm font-medium shadow-[0px_2px_12px_rgba(0,0,0,0.05)] sm:text-base">
      <p tabIndex={0} className="max-w-[90%] grow cursor-pointer py-4 pl-4">
        {name}
      </p>
    </div>
  );
};

export default Item;
