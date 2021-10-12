/* eslint-disable consistent-return */
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/db";

export const addRSVP = async (data) => {
  const docRef = await addDoc(collection(db, "rsvp"), data);

  return docRef;
};
