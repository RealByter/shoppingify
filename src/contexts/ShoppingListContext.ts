import { createContext } from "react";
import ListItem from "../components/list/ListItem.interface";
import Item from "../components/items/Item.interface";

interface Value {
  showingList: boolean;
  setShowingList: any;
  name: string;
  setName(name: string): any;
  items: ListItem[];
  addItem(item: Item): any;
  removeItem(id: string): any;
  changePcs(id: string, pcs: number): any;
}

const ShoppingListContext = createContext<Value>({
  name: "",
  setName: (name) => {},
  showingList: false,
  setShowingList: () => {},
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  changePcs: (id, pcs) => {},
});

export default ShoppingListContext;
