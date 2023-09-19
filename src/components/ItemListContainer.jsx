import React, { useEffect, useState } from 'react';
import productos from "../../productos.json";
import ItemList from './itemList';
import '../App.css';
import { useParams } from 'react-router-dom';

const mockAPI = (idCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (idCategory !== undefined) {
                const productosFiltrados = productos.filter(item => item.categoria === idCategory);

                resolve(productosFiltrados)
            } else {
                resolve(productos);
            }
        }, 1000);
    });
};

export default function ItemListContainer() {
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const { idCategory} = useParams()

    
    useEffect(() => {
        console.log(idCategory)
        mockAPI(idCategory).then((data) => setProductosFiltrados(data));
    }, [idCategory]);

    return (
        <div className='item-list-container'>
            <ItemList productos={productosFiltrados} />
        </div>
    );
}


