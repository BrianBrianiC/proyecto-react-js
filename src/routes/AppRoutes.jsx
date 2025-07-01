import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer'
import ErrorRoute from '../components/ErrorRoute';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path = '*' element={<ErrorRoute/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes> 
    );
}

export default AppRoutes;
