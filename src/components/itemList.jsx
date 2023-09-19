import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';
import Item from './item';

const ItemList = ({ productos }) => {
    return (
        <div className='prueba'>
            {productos.map(item => (
                <Item  key={item.id} producto={item}/>
            ))}
        </div>
    )
}

export default ItemList;
