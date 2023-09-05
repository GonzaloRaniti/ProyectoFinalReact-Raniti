import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            
            <Navbar />
            <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
