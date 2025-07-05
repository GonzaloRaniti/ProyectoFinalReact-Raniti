import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <div className='prueba'>
            {productos.map(item => (
                <Item key={item.id} producto={item}/>
            ))}
        </div>
    )
}

export default ItemList;
