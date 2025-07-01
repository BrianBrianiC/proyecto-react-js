import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <svg
        className="w-24 h-24 text-gray-400 mb-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4L17 13M7 13L5.4 5M17 13l1.6 6M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>

      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Tu carrito está vacío</h1>
      <p className="text-gray-600 mb-6">Aún no agregaste productos. ¿Querés ver nuestra tienda?</p>

      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-200"
      >
        Ir a comprar
      </Link>
    </div>
  );
}

export default EmptyCart;
