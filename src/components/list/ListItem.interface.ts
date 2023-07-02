import ItemInterface from "../items/Item.interface";

export default interface ListItem {
  id: string;
  itemId: string;
  listId: string;
  name: string;
  pcs: number;
  completed: boolean;
  category: string;
}
