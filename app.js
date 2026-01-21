/*******************************
 * CONFIGURACIÓN DE FIREBASE
 *******************************/
const firebaseConfig = {
  apiKey: "AIzaSyAZhe5spL1KxSWCy8HzEug8Y5jV9gJegPA",
  authDomain: "esfm-453b2.firebaseapp.com",
  databaseURL: "https://esfm-453b2-default-rtdb.firebaseio.com",
  projectId: "esfm-453b2",
  storageBucket: "esfm-453b2.firebasestorage.app",
  messagingSenderId: "916608328994",
  appId: "1:916608328994:web:d6efff1e952ef95b27717b",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const db = firebase.database();

// Exponer db a la consola (IMPORTANTE)
window.db = db;

console.log("🔥 Firebase inicializado correctamente");
console.log("Usa `db` desde la consola para hacer consultas");
