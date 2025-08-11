// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7shSSg6U1ZR7kh5WcXT2nm3awS2IApak",
  authDomain: "catering-4abcc.firebaseapp.com",
  projectId: "catering-4abcc",
  messagingSenderId: "491525242334",
  appId: "1:491525242334:web:7772cb84a708ec8e16f14f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth & db so other pages can use them
export const auth = getAuth(app);
export const db = getFirestore(app);