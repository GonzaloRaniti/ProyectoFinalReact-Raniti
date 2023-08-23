import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting={'Bienvenidos a mi E-Commerce'} />
        </div>
    );
}

export default App;
