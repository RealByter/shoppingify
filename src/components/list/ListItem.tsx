import ListItemInterface from "./ListItem.interface";
import PcsDisplay from "./PcsDisplay";

interface Props {
  name: string;
  id: string;
}

const ListItem: React.FC<Props> = ({ name, id }) => (
  <div className="relative flex h-[45px] items-center">
    <p className="whitespace-nowrap text-base font-semibold md:text-lg">
      {name}
    </p>
    <PcsDisplay id={id} />
  </div>
);

export default ListItem;
