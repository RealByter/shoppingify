import CategoryGrid from "../general/CategoryGrid";
import HistoryItem from "./HistoryItem";

interface Props {
  items: {
    id: string;
    itemId: string;
    pcs: number;
  }[];
  name: string;
}

const HistoryCategory: React.FC<Props> = ({ items, name }) =>
  items.length ? (
    <CategoryGrid name={name}>
      {items.map((item) => (
        <HistoryItem key={item.id} id={item.itemId} pcs={item.pcs} />
      ))}
    </CategoryGrid>
  ) : (
    <></>
  );

export default HistoryCategory;
