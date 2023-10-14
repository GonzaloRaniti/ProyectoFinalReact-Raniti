import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Checkout from './components/checkOut';


function App() {
    return (
        <div className="App">


            <CartContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer />} />
                        <Route exact path="/category/:idCategory" element={<ItemListContainer />} />
                        <Route
                            exact
                            path="/producto/:idProducto"
                            element={<ItemDetailContainer />}
                        />
                        <Route
                            exact
                            path="/producto/:idProducto"
                            element={<ItemDetail />}
                        />
                        <Route exact path='/contacto' element={<Contacto />} />
                        <Route exact path='/cart' element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>

            </CartContextProvider>
        </div>
    );
}

export default App;
