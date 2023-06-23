import ListItemInterface from "./ListItem.interface";
import PcsDisplay from "./PcsDisplay";

interface Props {
  name: string;
}

const ListItem: React.FC<Props> = ({ name }) => (
  <div className="flex items-center h-[45px] relative">
    <p className="text-base font-semibold md:text-lg whitespace-nowrap">{name}</p>
    <PcsDisplay name={name} />
  </div>
);

export default ListItem;
