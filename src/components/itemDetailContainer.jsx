import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";
import ItemList from './itemList';
import '../App.css';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const productosCollection = idCategory
                    ? getDocs(query(collection(db, "productos"), where("categoria", "==", idCategory)))
                    : getDocs(collection(db, "productos"));

                const snapshot = await productosCollection;
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProductosFiltrados(data);
            } catch (error) {
                console.error("Error getting documents: ", error);
            }
        };

        fetchData();
    }, [idCategory]);

    return (
        <div className='item-list-container'>
            <ItemList productos={productosFiltrados} />
        </div>
    );
}
