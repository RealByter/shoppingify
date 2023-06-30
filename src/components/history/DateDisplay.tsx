import { MdEventNote } from "react-icons/md";

const toDateString = (at: number): string => {
  const curDate = new Date(at);
  let dateString =
    curDate.toLocaleDateString("en-us", { weekday: "short" }) + " ";
  dateString += curDate.getDay() + ".";
  dateString += curDate.getMonth() + ".";
  dateString += curDate.getFullYear();
  return dateString;
};

interface Props {
  at: number;
}

const DateDisplay: React.FC<Props> = ({ at }) => (
  <div className="order-3 mr-auto flex items-center text-gray-400 sm:order-none sm:mr-0 sm:gap-2">
    <MdEventNote className="text-xl" />
    <p className="text-xs">{toDateString(at)}</p>
  </div>
);

export default DateDisplay;
