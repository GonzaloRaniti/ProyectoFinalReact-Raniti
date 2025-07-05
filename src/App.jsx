import React from 'react';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path="/category/:idCategory" element={<ItemListContainer />} />
                        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
                        <Route path='/contacto' element={<Contacto />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}

export default App;
