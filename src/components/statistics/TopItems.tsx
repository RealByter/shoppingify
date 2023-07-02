import Stat from "./Stat";

const TopItems = () => {
  return (
    <div className="max-w-xs grow basis-64">
      <h2 className="text-xl md:text-2xl">Top Categories</h2>
      <div className="flex flex-col">
        <Stat color="#F9A109" name="Banana" percentage={12} />
      </div>
    </div>
  );
};

export default TopItems;
