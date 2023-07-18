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
import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

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
  const [dates, setDates] = useState<any>(null);

  const listsQuery = dates
    ? query(
        collection(firestore, "shoppingLists"),
        where("status", "==", "completed"),
        where("at", ">=", dates.startOfMonth),
        where("at", "<=", dates.endOfMonth)
      )
    : collection(firestore, "empty");
  const { status, data: lists } = useFirestoreCollectionData(listsQuery, {
    idField: "id",
  });
  const [data, setData] = useState<{ day: number; items: number }[]>([]);

  useEffect(() => {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    const endOfMonth = new Date();
    endOfMonth.setDate(monthsDays[endOfMonth.getMonth()]);
    setDates({
      startOfMonth: startOfMonth.getTime(),
      endOfMonth: endOfMonth.getTime(),
    });
  }, []);

  useEffect(() => {
    const countItems = async (id: string) => {
      const itemsQuery = query(
        collection(firestore, "listItems"),
        where("listId", "==", id)
      );
      const itemsSnapshot = await getCountFromServer(itemsQuery);
      return itemsSnapshot.data().count;
    };

    if (status === "success" && lists) {
      setData([]);
      lists.forEach((list) => {
        countItems(list.id).then((res) => {
          setData((oldState) => {
            const day = new Date(list.at).getDate();
            const oldPair = oldState.find((pair) => pair.day === day);
            if (oldPair) {
              oldState = oldState.filter((pair) => pair.day !== day);
              oldState.push({ day, items: oldPair.items + res });
            } else {
              oldState.push({ day, items: res });
            }
            return oldState
              .filter((pair) => pair.items)
              .sort((pairA, pairB) =>
                pairA.day < pairB.day ? -1 : pairA.day > pairB.day ? 1 : 0
              );
          });
        });
      });
    }
  }, [status, lists]);

  return (
    <div className="basis-full">
      <h2 className="mb-7 text-xl lg:mb-10 lg:text-2xl">Monthly Summary</h2>
      {lists ? (
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
      ) : (
        <p className="mt-20 text-center">No items bought this month</p>
      )}
    </div>
  );
};

export default MonthlySummary;
