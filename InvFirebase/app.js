// Importa las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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
const auth = getAuth();
const db = getFirestore();

// Verifica el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userId = user.uid;
    loadUserData(userId);
  } else {
    window.location.href = "login.html";
  }
});

// Cargar datos del usuario
const loadUserData = async (userId) => {
  const userDoc = await getDoc(doc(db, "users", userId));
  if (userDoc.exists()) {
    const userData = userDoc.data();
    document.getElementById("user-info").innerText = `Bienvenido ${userData.name}`;
    loadInventory(userData.laboratorios);
  } else {
    console.log("No such document!");
  }
};

// Cargar inventario
const loadInventory = async (laboratorios) => {
  const q = query(collection(db, "inventario"), where("laboratorioId", "in", laboratorios));
  const querySnapshot = await getDocs(q);
  const inventoryList = document.getElementById("inventory-list");
  inventoryList.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const item = document.createElement("div");
    item.innerText = `${data.area} - ${data.descripcion} - ${data.serie}`;
    inventoryList.appendChild(item);
  });
};

// Logout
document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  }).catch((error) => {
    console.error("Error signing out: ", error);
  });
});