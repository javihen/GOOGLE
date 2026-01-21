/*********************************
 * CONFIGURACIÓN FIREBASE
 *********************************/
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

// Base de datos
const db = firebase.database();

/*********************************
 * FUNCIONES SOLO PARA CONSOLA
 *********************************/

// Mostrar todas las preguntas
function verTodo() {
  db.ref("qa")
    .once("value")
    .then((snap) => console.log(snap.val()));
}

// Obtener respuesta por ID
function respuestaPorId(id) {
  db.ref(`qa/${id}`)
    .once("value")
    .then((snap) => {
      if (snap.exists()) {
        console.log("✅ Respuesta:", snap.val().respuesta);
      } else {
        console.log("❌ No existe esa pregunta");
      }
    });
}

// Preguntar por texto exacto
function preguntar(textoPregunta) {
  db.ref("qa")
    .once("value")
    .then((snap) => {
      const data = snap.val();
      let encontrada = false;

      for (let key in data) {
        if (data[key].pregunta === textoPregunta) {
          console.log("✅ Respuesta:", data[key].respuesta);
          encontrada = true;
        }
      }

      if (!encontrada) {
        console.log("❌ Pregunta no encontrada");
      }
    });
}

// Ver TODA la base (raíz)
function verBaseCompleta() {
  db.ref("/")
    .once("value")
    .then((snap) => console.log(snap.val()));
}

/*********************************
 * EXPONER FUNCIONES A CONSOLA
 *********************************/
window.db = db;
window.verTodo = verTodo;
window.respuestaPorId = respuestaPorId;
window.preguntar = preguntar;
window.verBaseCompleta = verBaseCompleta;

console.log("🔥 Firebase listo");
console.log("Funciones disponibles:");
console.log("- verTodo()");
console.log("- respuestaPorId(id)");
console.log("- preguntar('texto')");
console.log("- verBaseCompleta()");
