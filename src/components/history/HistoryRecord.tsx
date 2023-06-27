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

const HistoryRecord:React.FC<Props> = ({name, at, completed, id}) => <div>
  <h3>{name}</h3>
  <div><MdEventNote /><p>{toDateString(at)}</p></div>
  <p>{completed ? 'completed' : 'cancelled'}</p>
  <button><MdExpandMore /></button>
</div>;

export default HistoryRecord;