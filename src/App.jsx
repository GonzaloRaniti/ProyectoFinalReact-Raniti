import React from 'react';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ItemCount from './components/itemCount';
import ItemDetail from './components/itemdetail';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';


function App() {
    const { idProducto } = useParams();

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
                    </Routes>
                </BrowserRouter>

            </CartContextProvider>
        </div>
    );
}

export default App;
