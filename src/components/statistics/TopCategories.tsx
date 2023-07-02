import ListItem from "../list/ListItem.interface";

interface Props {
  items: ListItem[];
}

const TopCategories: React.FC<Props> = ({ items }) => {
  return (
    <div className="max-w-xs grow basis-64">
      <h2 className="text-xl md:text-2xl">Top Categories</h2>
    </div>
  );
};

export default TopCategories;
