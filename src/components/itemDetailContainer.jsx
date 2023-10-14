import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from './itemdetail';
import '../app.css';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [productoFiltrado, setProductoFiltrado] = useState(null);
    const { idProducto } = useParams();
    const db = getFirestore();

    useEffect(() => {
        if (idProducto) {
            const productoDoc = doc(db, "productos", idProducto);

            getDoc(productoDoc)
                .then((doc) => {
                    if (doc.exists()) {
                        setProductoFiltrado({ id: doc.id, ...doc.data() });
                    } else {
                        console.error("No such document!");
                    }
                })
                .catch((error) => {
                    console.error("Error getting document:", error);
                });
        }
    }, [idProducto, db]);

    return (
        <div className='item-list-container'>
            {productoFiltrado && <ItemDetail producto={productoFiltrado} />}
        </div>
    );
}
