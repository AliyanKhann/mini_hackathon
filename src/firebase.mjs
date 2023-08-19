  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjWgyODUzIZkzPqA4_iWHuQpSAtLFStN0",
    authDomain: "hackaton-mini.firebaseapp.com",
    projectId: "hackaton-mini",
    storageBucket: "hackaton-mini.appspot.com",
    messagingSenderId: "406668305044",
    appId: "1:406668305044:web:9d51f5b9052330ed44ca81",
    measurementId: "G-MVMFEV0QPX"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export const auth = getAuth(app);
  const analytics = getAnalytics(app);
