import { createContext } from "react";
import ListItem from "../components/list/ListItem.interface";
import Item from "../components/items/Item.interface";

interface Value {
  items: ListItem[];
  name: string;
  id: string;
  showingList: boolean;
  setShowingList(arg: any): any;
}

const ShoppingListContext = createContext<Value>({
  items: [],
  name: "",
  id: "",
  showingList: false,
  setShowingList: () => {},
});

export default ShoppingListContext;
