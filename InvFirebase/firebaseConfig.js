

// Usa la URL completa para importar desde el CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword };
