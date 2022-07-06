
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

//SAVING NEW ITEMS
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "productItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// GET ALL PRODUCT items
export const getAllProductItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "productItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};