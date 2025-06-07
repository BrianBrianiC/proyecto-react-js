import React from 'react'
import Item from './Item'

function ItemList({data}) {
  return (
    <div className='grid grid-cols-4 gap-2 mt-14'>
        {data.map(prod =>( 
        <Item key={prod.id} data={prod}/>
        ))}
    </div> 
  )
}

export default ItemList