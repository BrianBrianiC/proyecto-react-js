import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import Item from './Item'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


function ItemDetail({ detalle }) {
    const {addItem} = useContext(CartContext) //Devuelve un objeto por eso uso llaves
    const [compra, setCompra] = useState(false)
    

    const onAdd = (cantidad) =>{
        setCompra(true)
        addItem(detalle, cantidad)
    }

    return (
        <div className="grid md:grid-cols-2 gap-2 max-w-5xl mx-auto m-7 p-6 items-start rounded-xl shadow">
            <div className="grid grid-cols-[80%]">
                <img
                    src={detalle.image}
                    alt={detalle.title}
                    className="w-auto h-auto max-h-[500px] object-contain rounded-xl shadow"
                />
            </div>

            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold">{detalle.title}</h1>
                    <p className="text-xl text-green-700 font-semibold mt-2">${parseInt(detalle.price) - 7000}</p>
                </div>

                <div className="text-gray-600 leading-relaxed text-sm border-t pt-4 text-">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui minima doloremque, accusantium deleniti ipsum exercitationem, sit recusandae laboriosam architecto iusto aut. Voluptatum voluptates explicabo quae numquam tempora atque distinctio.
                </div>
                <p className="text-gray-500 text-sm">Stock disponible: {detalle.stock}</p>
                {!compra ? (
                    <div className='flex justify-center'> 
                    <ItemCount data={detalle} onAdd={onAdd} /> 
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <Link to='/' className="bg-gray-800 text-white text-center py-2 rounded-lg hover:bg-gray-900 transition">
                            Seguir comprando
                        </Link>
                        <Link to='/cart' className="bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition">
                            Ir a pagar
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemDetail
