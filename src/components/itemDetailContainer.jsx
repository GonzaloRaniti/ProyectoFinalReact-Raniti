import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from './itemDetail';
import '../App.css';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [productoFiltrado, setProductoFiltrado] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { idProducto } = useParams();
    const db = getFirestore();

    useEffect(() => {
        if (idProducto) {
            setLoading(true);
            setError(null);
            
            const productoDoc = doc(db, "productos", idProducto);

            getDoc(productoDoc)
                .then((doc) => {
                    if (doc.exists()) {
                        setProductoFiltrado({ id: doc.id, ...doc.data() });
                    } else {
                        setError("Producto no encontrado");
                    }
                })
                .catch((error) => {
                    console.error("Error getting document:", error);
                    setError("Error al cargar el producto");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [idProducto, db]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Cargando producto...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h2>Error</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className='item-list-container'>
            {productoFiltrado && <ItemDetail producto={productoFiltrado} />}
        </div>
    );
}
