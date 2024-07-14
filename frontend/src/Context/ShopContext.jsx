import { createContext } from "react";
import all_products from "../Components/Assets/all_products";
// create
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const ContextValue = { all_products };
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
