// app.js

// Import Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Your Firebase configuration (already replaced with your details)
const firebaseConfig = {
  apiKey: "AIzaSyAIge7IW_FMZFTgZK9Ypg-dGiC2ojPwKb4",
  authDomain: "electric-vehicle-recharg-d1850.firebaseapp.com",
  projectId: "electric-vehicle-recharg-d1850",
  storageBucket: "electric-vehicle-recharg-d1850.firebasestorage.app",
  messagingSenderId: "1021509858438",
  appId: "1:1021509858438:web:3dd435c8ab17ba76140d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful! Welcome " + userCredential.user.email);
  } catch (error) {
    alert("Error: " + error.message);
  }
}


async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful! Welcome back " + userCredential.user.email);
  } catch (error) {
    alert("Error: " + error.message);
  }
}


async function logoutUser() {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
  } catch (error) {
    alert("Error: " + error.message);
  }
}


async function addOrder(customerName, menuItem, quantity, date) {
  try {
    await addDoc(collection(db, "orders"), {
      customerName,
      menuItem,
      quantity,
      date
    });
    alert("Order placed successfully!");
  } catch (error) {
    alert("Error placing order: " + error.message);
  }
}


async function getOrders() {
  try {
    const querySnapshot = await getDocs(collection(db, "orders"));
    let ordersList = [];
    querySnapshot.forEach((doc) => {
      ordersList.push({ id: doc.id, ...doc.data() });
    });
    console.log("Orders:", ordersList);
    return ordersList;
  } catch (error) {
    console.error("Error getting orders:", error);
  }
}

