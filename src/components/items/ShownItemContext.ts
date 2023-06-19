import { createContext, useState } from "react";

const ShownItemContext = createContext({
  shownItem: "",
  setShownItem: (name: string) => {},
});

export default ShownItemContext;
