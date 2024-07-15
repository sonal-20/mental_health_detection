import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBt06zZ4IrUBiJ-yA9OItzILEwBUMJuPgs",
  authDomain: "mental-health-9e541.firebaseapp.com",
  projectId: "mental-health-9e541",
  storageBucket: "mental-health-9e541.appspot.com",
  messagingSenderId: "471424811928",
  appId: "1:471424811928:web:89097f2e01e413a7c921ed",
  databaseURL:"https://mental-health-9e541-default-rtdb.firebaseio.com",
};


export const app = initializeApp(firebaseConfig);