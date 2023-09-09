import React from 'react';
import Navbar from './components/navbar';
import Contacto from './components/contacto'; // Asegúrate de que la ruta sea correcta
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/itemCount'; 

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <ItemListContainer/>
                <Routes>
                    <Route exact path="/camisas" element={<p>Camisas</p>} />
                    <Route exact path="/pantalones" element={<p>Pantalones</p>} />
                    <Route exact path="/remeras" element={<p>Remeras</p>} />
                    <Route exact path="/contacto" element={<Contacto />} /> 
                </Routes>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
            </BrowserRouter>
        </div>
    );
}

export default App;
