// Script para subir productos a Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import productos from './productos.json' assert { type: "json" };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-wNb0fzt1xtVM_8QyJpXLuRUUOCYXYaI",
  authDomain: "cgindumentaria-942f1.firebaseapp.com",
  projectId: "cgindumentaria-942f1",
  storageBucket: "cgindumentaria-942f1.firebasestorage.app",
  messagingSenderId: "429244680715",
  appId: "1:429244680715:web:286ac14100c6ca3103950e",
  measurementId: "G-X4L0K5BQ25"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadProductos() {
  try {
    console.log('Iniciando carga de productos...');
    
    for (const producto of productos) {
      // Usar el ID del JSON como ID del documento
      await setDoc(doc(db, "productos", producto.id), {
        titulo: producto.titulo,
        precio: producto.precio,
        descripcion: producto.descripcion,
        categoria: producto.categoria,
        image: producto.image,
        stock: producto.stock
      });
      console.log(`Producto ${producto.titulo} cargado exitosamente`);
    }
    
    console.log('✅ Todos los productos han sido cargados exitosamente a Firebase!');
    console.log('Ahora puedes ver los productos en tu aplicación web.');
    
  } catch (error) {
    console.error('❌ Error al cargar productos:', error);
  }
}

// Ejecutar la función
uploadProductos(); 