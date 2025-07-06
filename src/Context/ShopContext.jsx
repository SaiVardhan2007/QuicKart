import { createContext } from "react";
import all__products from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ props }) => {
    const ContextValue = {all__products}
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );

}
export default ShopContextProvider;