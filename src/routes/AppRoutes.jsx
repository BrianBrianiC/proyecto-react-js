import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer'
import ErrorRoute from '../components/ErrorRoute';
function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path = '*' element={<ErrorRoute/>}/>
        </Routes> 
    );
}

export default AppRoutes;
