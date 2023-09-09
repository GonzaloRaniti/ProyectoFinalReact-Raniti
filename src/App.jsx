import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/itemCount'; 

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                </Routes>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
            </BrowserRouter>
        </div>
    );
}

export default App;
