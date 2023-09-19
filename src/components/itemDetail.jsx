
import { useEffect, useState } from 'react';
import '../app.css';
import prod from "../../productos.json"



const ItemDetail = ({ producto }) => {
    console.log(producto)
    return (
        <div className='card'>
            <p>{producto.titulo}</p>
            <p>Precio $ {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p>{producto.categoria}</p>
            <img src={producto.image} alt="Imagen" className='img' />
        </div>
    )
}

export default ItemDetail