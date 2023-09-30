import { createContext, useState, useContext } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        if (item && item.id) {
            const existingItem = cartList.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                setCartList(prevCart => prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + qty } : cartItem
                ));
            } else {
                setCartList(prevCart => [...prevCart, { ...item, quantity: qty }]);
            }
        } else {
            console.error("Item o ID no válidos:", item);
        }
    }

    const removerProducto = (id) => {
        setCartList(prevCart => prevCart.filter(cartItem => cartItem.id !== id));
    }

    const limpiarCarrito = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.some(item => item.id === id);
    }

    const calcItemsQty = () => {
        return cartList.reduce((total, item) => total + item.quantity, 0);
    };



    

    return (
        <CartContext.Provider value={{ cartList, addToCart, removerProducto, limpiarCarrito, isInCart,  calcItemsQty }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
}

export default CartContextProvider;
