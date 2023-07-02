import ListItem from "../list/ListItem.interface";

interface Props {
  items: ListItem[];
}

const YearlySummary: React.FC<Props> = ({ items }) => {
  return (
    <div className="basis-full">
      <h2 className="text-xl md:text-2xl">Yearly Summary</h2>
    </div>
  );
};

export default YearlySummary;
