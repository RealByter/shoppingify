import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ListItem from "../list/ListItem.interface";

interface Props {
  items: ListItem[];
}

const data = [
  { day: 1, items: 10 },
  { day: 2, items: 15 },
  { day: 5, items: 8 },
  { day: 7, items: 12 },
  // Leave other days empty or remove them from the array
];

const MonthlySummary: React.FC<Props> = ({ items }) => {
  return (
    <div className="basis-full">
      <h2 className="mb-7 text-xl lg:mb-10 lg:text-2xl">Yearly Summary</h2>
      <div className="-ml-10 w-[calc(100%+2rem)]">
        <ResponsiveContainer height={300}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="items" stroke="#F9A109" />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlySummary;
