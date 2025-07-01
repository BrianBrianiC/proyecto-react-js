import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Cargar del localStorage al iniciar
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Guardar en localStorage cada vez que cambia el carrito
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, cantItem) => {
        if (isInCart(item.id)) {
        const updatedCart = cart.map(prod =>
            prod.id === item.id
            ? { ...prod, quantity: prod.quantity + cantItem }
            : prod
        );
        setCart(updatedCart);
        } else {
        setCart([...cart, { ...item, quantity: cantItem }]);
        }
    };

    const clear = () => {
        setCart([]);
        localStorage.removeItem("cart"); // también borramos el localStorage
    };

    const removeItem = id => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    const isInCart = id => {
        return cart.some(prod => prod.id === id);
    };

    const cartQuantity = () => {
        return cart.reduce((total, prod) => total + prod.quantity, 0);
    };

    const cartTotal = () => {
        return cart.reduce((total, prod) => total + prod.quantity * prod.price, 0);
    };

    return (
        <CartContext.Provider
        value={{ cart, addItem, clear, removeItem, cartQuantity, cartTotal }}
        >
        {children}
        </CartContext.Provider>
    );
};
