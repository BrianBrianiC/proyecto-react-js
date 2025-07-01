import React, { useContext, useState } from 'react';

const ItemCount = ({ data, onAdd}) => {
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
        console.log(`Agregaste ${count} unidades de al carrito`);
        onAdd(count)
    };

    const resetear = () => {
        setCount(0);
    };

    return (
        <div className="w-full max-w-sm bg-white p-6 flex flex-col gap-5">
            <div className="flex items-center justify-center gap-6">
                <button
                    onClick={disminuir}
                    className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 text-2xl hover:bg-slate-300 transition"
                >
                    –
                </button>
                <span className="text-2xl font-semibold w-8 text-center">{count}</span>
                <button
                    onClick={aumentar}
                    className="w-10 h-10 rounded-full bg-slate-800 text-white text-2xl hover:bg-slate-900 transition"
                >
                    +
                </button>
            </div>

            <div className="flex flex-col gap-2">
                <button
                    onClick={handleAdd}
                    disabled={count === 0 || data.stock === 0}
                    className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    Agregar al carrito
                </button>

                <button
                    onClick={resetear}
                    className="bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
                >
                    Resetear
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
