// components/ErrorRoute.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorRoute() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="text-lg">Página no encontrada</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Volver al inicio
            </Link>
        </div>
    );
}

export default ErrorRoute;
