import React, { useEffect, useState } from 'react';
import productos from "../../productos.json";
import ItemDetail from './itemdetail';
import '../app.css';
import ItemCount from './itemCount';
import { Link, useParams } from 'react-router-dom';

const mockAPI = (idProducto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (idProducto !== undefined) {
                const productoFiltrados = productos.find(item => item.id === idProducto);

                resolve(productoFiltrados)
            }
        }, 1000);
    });
};

export default function ItemDetailContainer() {
    const [productoFiltrados, setProductoFiltrados] = useState([]);
    const { idProducto} = useParams()

    
    useEffect(() => {
        mockAPI(idProducto).then((data) => setProductoFiltrados(data));
    }, [idProducto]);

    return (
        <div className='item-list-container'>
            <ItemDetail producto={productoFiltrados} />
        </div>
    );
}


