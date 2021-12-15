/* eslint-disable consistent-return */
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../utils/db";

export const addRSVP = async (data) => {
  const docRef = await addDoc(collection(db, "rsvp"), data);

  return docRef;
};

export const addRestriction = async (data) => {
  const docRef = await addDoc(collection(db, "foodRestrictions"), data);

  return docRef;
};

export const readRSVP = async () => {
  const docRef = await getDocs(collection(db, "rsvp"));
  const res = [];
  docRef.forEach((doc) => res.push({ id: doc.id, ...doc.data() }));
  return res;
};
