import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
    const {cartQuantity} = useContext(CartContext) //Pasamos el Contexto
    return (
    <div className="relative">
        <FaShoppingCart className="text-xl" />
        {cartQuantity() > 0 && (
        <span className="absolute -top-3 -right-2.5 bg-red-600 text-white text-xs px-1 py-0.5 rounded-full">
            {cartQuantity()}
        </span>
        )}
    </div>
    );
} 
export default CartWidget