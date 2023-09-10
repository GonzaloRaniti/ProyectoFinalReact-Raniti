import React from 'react';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/itemCount';
import products from '../productos.json';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer productos={products}/>}/>
                    <Route path="/camisas" element={<ItemListContainer productos={products.filter((prod)=>prod.categoria==="camisas")}/>} />
                    <Route path="/pantalones" element={<ItemListContainer productos={products.filter((prod)=>prod.categoria==="pantalones")}/>} />  
                    <Route path="/remeras" element={<ItemListContainer productos={products.filter((prod)=>prod.categoria==="remeras")}/>} /> 
                    <Route path='/contacto' element={<Contacto/>} />                    
              </Routes>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
            </BrowserRouter>
        </div>
    );
}

export default App;
