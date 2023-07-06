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
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection, query, where } from "firebase/firestore";
import { useEffect } from "react";

const data = [
  { day: 1, items: 10 },
  { day: 2, items: 15 },
  { day: 5, items: 8 },
  { day: 7, items: 12 },
  // Leave other days empty or remove them from the array
];

const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const MonthlySummary: React.FC = () => {
  const firestore = useFirestore();
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  const endOfMonth = new Date();
  endOfMonth.setDate(monthsDays[endOfMonth.getMonth()]);
  const listsQuery = query(
    collection(firestore, "shoppingLists"),
    where("at", ">=", startOfMonth.getTime()),
    where("at", "<=", endOfMonth.getTime())
  );
  const {status, data: lists} = useFirestoreCollectionData(listsQuery);
  const data = {};
  
  useEffect(() => {
    if(status === 'success') {
      lists.forEach(list => {
        
      })
    }
  }, [status])

  return (
    <div className="basis-full">
      <h2 className="mb-7 text-xl lg:mb-10 lg:text-2xl">
        MonthlySummary Summary
      </h2>
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
