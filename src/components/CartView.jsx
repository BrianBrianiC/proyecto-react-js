import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, cartTotal, clear, removeItem } = useContext(CartContext);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Tu carrito 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((compra) => (
              <div
                key={compra.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={compra.image}
                  alt={compra.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 px-4">
                  <h3 className="font-medium text-lg">{compra.name}</h3>
                  <p className="text-sm text-gray-600">Precio: ${compra.price},00</p>
                  <p className="text-sm text-gray-600">Cantidad: {compra.quantity}</p>
                  <p className="text-sm text-gray-800 font-semibold">
                    Total: ${compra.price * compra.quantity},00
                  </p>
                </div>
                <button
                  className="text-red-600 font-bold text-xl hover:text-red-800 transition"
                  onClick={() => removeItem(compra.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <p className="text-2xl font-bold mb-4">Total a pagar: ${cartTotal()},00</p>
            <div className="flex justify-between items-center">
              <button
                onClick={clear}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
              >
                Borrar todo
              </button>
              <Link
                to="/checkout"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded"
              >
                Terminar compra
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
