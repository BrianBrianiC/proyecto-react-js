import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

function Cart() {
    const {cart} = useContext(CartContext)
  return (
    <>
        {cart.length ? <CartView/> : <EmptyCart/>}
    </>
  )
}

export default Cart