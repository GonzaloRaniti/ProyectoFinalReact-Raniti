import React from 'react';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/itemCount';
import ItemDetailContainer from './components/itemdetailcontainer';
// import { CartProvider } from './context/cartContext';


function App() {
    return (
        <div className="App">
            {/* <CartProvider> */}
            <BrowserRouter>
                
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer />} />
                    <Route exact path="/category/:idCategory" element={<ItemListContainer />} />
                    <Route exact path="/producto/:idProducto" element={<ItemDetailContainer />} />
                    <Route exact path='/contacto' element={<Contacto />} />
                </Routes>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
                
            </BrowserRouter>
            {/* </CartProvider> */}
        </div>
    );
}

export default App;
