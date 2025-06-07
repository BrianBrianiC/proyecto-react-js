import React, { useState } from 'react';

const ItemCount = ({ data }) => {
    console.log('HIOLA')
    console.log(data)
    const [count, setCount] = useState(0);

    const aumentar = () => {
        if (count < data.stock) {
            setCount(count + 1);
        }
    };

    const disminuir = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        if (count > 0) {
            console.log(`Agregaste ${count} unidades de al carrito`);
        }
    };

    const resetear = () => {
        setCount(0);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl shadow-md w-full max-w-xs ">
            <h2 className="text-xl font-bold"></h2>
            <p className="text-gray-600">Stock disponible: {data.stock}</p>

            <div className="flex items-center gap-4">
                <button
                    onClick={disminuir}
                    className="bg-red-500 text-white w-10 h-10 rounded-full text-xl hover:bg-red-600 transition"
                >
                    –
                </button>
                <span className="text-2xl font-semibold w-8 text-center">{count}</span>
                <button
                    onClick={aumentar}
                    className="bg-green-500 text-white w-10 h-10 rounded-full text-xl hover:bg-green-600 transition"
                >
                    +
                </button>
            </div>

            <button
                onClick={handleAdd}
                className="bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition w-full disabled:opacity-50"
                disabled={count === 0 || data.stock === 0}
            >
                Agregar al carrito
            </button>

            <button
                onClick={resetear}
                className="bg-gray-500 text-white py-1 px-4 rounded-xl hover:bg-gray-600 transition w-full"
            >
                Resetear
            </button>
        </div>
    );
};

export default ItemCount;
