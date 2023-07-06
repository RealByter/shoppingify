import ListItem from "../list/ListItem.interface";

interface Props {
  items: ListItem[];
}

const data = [
  { day: 1, amount: 10 },
  { day: 2, amount: 15 },
  { day: 5, amount: 8 },
  { day: 7, amount: 12 },
  // Leave other days empty or remove them from the array
];

const MonthlySummary: React.FC<Props> = ({ items }) => {
  return (
    <div className="basis-full">
      <h2 className="text-xl md:text-2xl">Yearly Summary</h2>
    </div>
  );
};

export default MonthlySummary;
