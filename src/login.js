import { auth} from "./firebase.mjs";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js"



document.getElementById("login-btn").addEventListener("click" ,()=>{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    location.replace("./dashbord.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
console.log(errorCode);
console.log(errorMessage);
  });

})
