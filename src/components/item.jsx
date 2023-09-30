
import { useEffect, useState } from 'react';
import '../app.css';
import prod from "../../productos.json"
import { Link } from 'react-router-dom';



const Item = ({ producto }) => {
    return (
        
        <div className='card'>
            <Link to={`/producto/${producto.id}`}>
            Ir a Detalle
            </Link>
            <p className='parrafo-3'>{producto.titulo}</p>
            <p className='parrafo-3'>Precio $ {producto.precio}</p>
            <p className='parrafo-3'>{producto.descripcion}</p>
            <p className='parrafo-3'>{producto.categoria}</p>
            <p className='parrafo-3'> Stock {producto.stock}</p>
            <img src={producto.image} alt="Imagen" className='img' />
        </div>
        
    )
}

export default Item