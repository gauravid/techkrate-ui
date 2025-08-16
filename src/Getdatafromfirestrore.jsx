import { getDocs, collection } from "firebase/firestore"; 
import { db } from "../firebase";
/**
 * Fetches all documents from a Firestore collection.
 * 
 * @param {string} collectionName - The name of the Firestore collection to fetch data from.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of document data.
 */
const getDataFromFirestore = async (collectionName) => {
  try {
    const collectionRef = collection(db, collectionName); // Reference to the Firestore collection
    const snapshot = await getDocs(collectionRef); // Get all documents in the collection
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map docs to include `id` and `data`
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw error; // Propagate the error
  }
};

export default getDataFromFirestore;
