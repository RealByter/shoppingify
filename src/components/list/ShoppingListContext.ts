import { createContext } from "react";
import ListItem from "./ListItem.interface";

interface Value {
  showingList: boolean;
  setShowingList(state: boolean): any;
  name: string;
  setName(name: string): any;
  items: ListItem[];
  addItem(item: ListItem): any;
  removeItem(id: string): any;
  changePcs(id: string, pcs: number): any;
}

const ShoppingListContext = createContext<Value>({
  name: "",
  setName: (name) => {},
  showingList: false,
  setShowingList: (state) => {},
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  changePcs: (id, pcs) => {},
});

export default ShoppingListContext;
