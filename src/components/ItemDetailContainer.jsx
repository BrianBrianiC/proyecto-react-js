import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'; // Asegúrate de que la ruta esté bien
import { getProducts } from '../mock/productos'; // También verifica esta ruta

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({});

    useEffect(() => {
        getProducts()
            .then((response) => {
                const producto = response.find((item) => item.id === '03');
                setDetalle(producto);
            })
            .catch((error) => console.log(error));
    }, []);

    console.log(detalle); // Esto es útil para depurar

    return (
        <div>
            <ItemDetail detalle={detalle} />
        </div>
    );
};

export default ItemDetailContainer;
