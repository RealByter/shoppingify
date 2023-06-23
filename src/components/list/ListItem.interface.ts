import ItemInterface from "../items/Item.interface";

export default interface ListItem {
  id: string;
  name: string;
  pcs: number;
  completed: boolean;
  category: string;
}
