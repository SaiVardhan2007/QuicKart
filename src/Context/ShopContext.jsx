import React, { createContext } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < all_products.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };

const ShopContextProvider = ( props ) => {
    const [cart, setCart] = React.useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cart)
    };
    const removeFromCart = (itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        console.log(cart)
    };
    const ContextValue = {all_products, cart, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;