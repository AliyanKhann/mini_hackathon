import { auth } from "./firebase.mjs";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
var title2=document.getElementById("title2")
var decs=document.getElementById("description")

var btn= document.getElementById("btn")
btn.addEventListener("click" , ()=>{
    var title=document.getElementById("placeholder").value
    var dec=document.getElementById("Description").value

   
})
