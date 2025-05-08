import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBqLeHhOIlDrHCDqovuvmX5fEQIDccC_UI",
    authDomain: "inventario-login-4137e.firebaseapp.com",
    projectId: "inventario-login-4137e",
    storageBucket: "inventario-login-4137e.firebasestorage.app",
    messagingSenderId: "695847381869",
    appId: "1:695847381869:web:33401d4af8b3237842c864",
    measurementId: "G-NVS9QSLHNH"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lista de estados
const estados = ["Disponible", "En Uso", "Dañado", "Fuera de Servicio"];

// Función para generar bienes aleatorios
async function insertarBienes() {
    for (let i = 1; i <= 10; i++) {
        const bien = {
            laboratorio: `Lab ${Math.floor(Math.random() * 10) + 1}`,
            area: `Área ${Math.floor(Math.random() * 5) + 1}`,
            descripcion: `Mobiliario ${i}`,
            marca: `Marca ${i}`,
            color: ["Rojo", "Azul", "Verde", "Negro", "Blanco"][Math.floor(Math.random() * 5)],
            material: ["Madera", "Metal", "Plástico"][Math.floor(Math.random() * 3)],
            serie: `SERIE-${Math.floor(Math.random() * 10000)}`,
            estado: estados[Math.floor(Math.random() * 4)],
            observaciones: "Sin observaciones",
            usuario_responsable: `Usuario ${i}`,
            cc: `CC-${Math.floor(Math.random() * 100)}`,
            no_etiqueta: `ETQ-${Math.floor(Math.random() * 500)}`,
            ultimas_observaciones: "Ninguna",
            fecha: new Date().toISOString().split("T")[0],
            area_traspaso: "",
            fecha_traspaso: ""
        };

        await addDoc(collection(db, "mobiliario"), bien);
        console.log(`Bien ${i} insertado`);
    }
}

// Ejecutar la función
insertarBienes();
