import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
  onValue,
  query,
  orderByChild
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjITxqMGbT7fb9R-rl2rFHZcQvCoWgsgc",
  authDomain: "nauryz-ar-quest.firebaseapp.com",
  databaseURL: "https://nauryz-ar-quest-default-rtdb.firebaseio.com",
  projectId: "nauryz-ar-quest",
  storageBucket: "nauryz-ar-quest.firebasestorage.app",
  messagingSenderId: "985856346374",
  appId: "1:985856346374:web:80b757a445f83785d93687"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.FB = {
  db,
  ref,
  set,
  update,
  get,
  onValue,
  query,
  orderByChild
};
