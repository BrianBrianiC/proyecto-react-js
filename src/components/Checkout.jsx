import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clear } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: '',
        address: '',
        email: '',
        email2: ''
    });

    const [errors, setErrors] = useState({});
    const [orderId, setOrderId] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyer(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const errs = {};
        if (!buyer.name.trim()) errs.name = 'Nombre requerido';
        if (!buyer.address.trim()) errs.address = 'Dirección requerida';
        if (!buyer.email.trim()) errs.email = 'Correo requerido';
        if (buyer.email !== buyer.email2) errs.email2 = 'Los correos no coinciden';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const finalizarCompra = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const orden = {
        comprador: {
            name: buyer.name,
            address: buyer.address,
            email: buyer.email
        },
        compras: cart,
        total: cartTotal(),
        date: serverTimestamp()
        };

        try {
        const ventas = collection(db, "orders");
        const docRef = await addDoc(ventas, orden);
        setOrderId(docRef.id);
        clear();
        } catch (error) {
        console.error("Error al crear la orden:", error);
        alert("Ocurrió un error al generar tu orden.");
        }
    };

    const copyId = () => {
        navigator.clipboard.writeText(orderId);
        alert('ID copiado al portapapeles');
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        {
            orderId ? (
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold text-green-700">¡Compra realizada con éxito!</h2>
                <p className="text-lg">ID de orden: <b>{orderId}</b></p>
                <button
                onClick={copyId}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                >
                Copiar ID
                </button>
                <div className="mt-4">
                <Link to="/" className="text-blue-600 underline">Volver al inicio</Link>
                </div>
            </div>
            ) : (
            <>
                <h1 className="text-2xl font-bold mb-6 text-center">Completa con tus datos</h1>
                <form onSubmit={finalizarCompra} className="space-y-4" noValidate>
                {[
                    { label: 'Nombre completo', name: 'name', type: 'text' },
                    { label: 'Dirección de envío', name: 'address', type: 'text' },
                    { label: 'Correo electrónico', name: 'email', type: 'email' },
                    { label: 'Repetir correo', name: 'email2', type: 'email' }
                ].map(field => (
                    <div key={field.name} className="flex flex-col">
                    <label className="font-medium mb-1">{field.label}:</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={buyer[field.name]}
                        onChange={handleChange}
                        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                        errors[field.name] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder={field.label}
                    />
                    {errors[field.name] && (
                        <span className="text-red-600 text-sm mt-1">{errors[field.name]}</span>
                    )}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                    Finalizar Compra
                </button>
                </form>
            </>
            )
        }
        </div>
    );
};

export default Checkout;
