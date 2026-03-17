<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc, updateDoc, onSnapshot, collection, query, orderBy } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  projectId: "XXX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.FB = {
db, doc, setDoc, updateDoc, onSnapshot, collection, query, orderBy
};

</script>