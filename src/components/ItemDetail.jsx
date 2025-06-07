import React from 'react'
import ItemCount from './ItemCount'
import Item from './Item'

function ItemDetail({ detalle }) {
    return (
        <div className="grid md:grid-cols-[auto_1fr] grid-rows-2 gap-8 max-w-6xl mx-auto p-6 items-start">

            <div className="row-span-2 col-span-1">
                <Item data={detalle} />
            </div>

            <div>
                <ItemCount data={detalle} />
            </div>

            <div className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui minima doloremque, accusantium deleniti ipsum exercitationem, sit recusandae laboriosam architecto iusto aut. Voluptatum voluptates explicabo quae numquam tempora atque distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, consequuntur enim? Autem perspiciatis nulla optio consectetur minima fugiat, distinctio obcaecati, libero repellendus aliquam qui ullam doloremque? Unde sed expedita quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia tenetur eveniet dolore, perferendis voluptates architecto, pariatur, voluptatem quaerat adipisci debitis enim reiciendis fuga? Aperiam rerum expedita facere vel deleniti?
            </div>
        </div>
    )
}

export default ItemDetail
