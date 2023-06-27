import { MdEventNote, MdExpandMore } from "react-icons/md";

interface Props {
  name: string;
  at: number;
  completed: boolean;
  id: string;
}

const toDateString = (at: number): string => {
  const curDate = new Date(at);
  let dateString =
    curDate.toLocaleDateString("en-us", { weekday: "short" }) + " ";
  dateString += curDate.getDay() + ".";
  dateString += curDate.getMonth() + ".";
  dateString += curDate.getFullYear();
  return dateString;
};

const HistoryRecord: React.FC<Props> = ({ name, at, completed, id }) => (
  <div className="flex cursor-pointer flex-wrap gap-y-3 items-center border-t-2 border-gray-100 bg-white px-3 py-3 sm:gap-6 sm:rounded-xl sm:border-none sm:p-5 sm:shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)] sm:mb-7">
    <h3 className="ml-0.5 order-1 mr-auto w-[90%] font-semibold sm:order-none sm:w-auto sm:ml-0">
      {name}
    </h3>
    <div className="order-3 mr-auto flex items-center text-gray-400 sm:order-none sm:mr-0 sm:gap-2">
      <MdEventNote className="text-xl" />
      <p className="text-xs">{toDateString(at)}</p>
    </div>
    <div className="order-4 flex justify-center sm:order-none sm:w-[76px]">
      <p
        className={`rounded-lg border border-solid text-xs px-1 py-0.5 sm:px-2 sm:py-1 ${
          completed
            ? "border-cyan-500 text-cyan-500"
            : "border-red-500 text-red-500"
        }`}
      >
        {completed ? "completed" : "cancelled"}
      </p>
    </div>
    <button className="order-2 sm:order-none">
      <MdExpandMore className="h-5 w-5 -rotate-90 scale-110 text-primary sm:scale-150" />
    </button>
  </div>
);

export default HistoryRecord;
