import { useEffect, useState } from 'react';
import '../app.css';
import prod from "../../productos.json"
import ItemList from "../components/itemList"




const ItemListContainer = ({productos}) => {

    return (
        <div className='prueba'>
            {
             productos.map(item => <ItemList producto={item} key={item.id} />)   
            }
        </div>
    )
}



export default ItemListContainer;