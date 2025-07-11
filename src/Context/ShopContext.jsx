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
        setCart((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log(updatedCart);
            return updatedCart;
        });
    };
    const getTotalCartAmount = ()=> {
        let totalAmount = 0;
        for (const item in cart){
            if (cart[item] > 0){
                let ItemInfo = all_products.find((product)=> (product.id == Number(item)))
                totalAmount+=cart[item]*ItemInfo.new_price
            }
        }
        return totalAmount
    }
    const removeFromCart = (itemId) => {
        setCart((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
            console.log(updatedCart);
            return updatedCart;
        });
    };
    const ContextValue = {all_products, cart, addToCart, removeFromCart, getTotalCartAmount};
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;