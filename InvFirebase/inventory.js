import { getFirestore, collection, addDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();

// Función para agregar un nuevo item al inventario
const addItemToInventory = async (itemData) => {
  try {
    const docRef = await addDoc(collection(db, "inventario"), itemData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Función para actualizar un item en el inventario
const updateItemInInventory = async (itemId, updatedData) => {
  try {
    const itemRef = doc(db, "inventario", itemId);
    await updateDoc(itemRef, updatedData);
    console.log("Document updated with ID: ", itemId);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};