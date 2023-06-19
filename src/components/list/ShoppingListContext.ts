import { createContext } from "react";
import ListItem from "./ListItem.interface";

interface Value {
  items: ListItem[];
  addItem(item: ListItem): any;
  removeItem(id: string): any;
  changePcs(id: string, pcs: number): any;
}

const ShoppingListContext = createContext<Value>({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  changePcs: (id, pcs) => {},
});

export default ShoppingListContext;
