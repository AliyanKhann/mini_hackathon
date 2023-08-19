import { auth,storage,db} from "./firebase.mjs";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js"
import {collection,addDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js"
import {uploadBytes, ref ,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js"
document.getElementById("btn").addEventListener("click" ,()=>{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var password2=document.getElementById("password2").value;
    var file= document.getElementById("file").files[0];

   

    if(fname.length>=3){
        if(lname.length>=1){
            if(email.includes("@")){
                if(password==password2){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
const storageRef = ref(storage, user.uid);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  getDownloadURL(ref(storage,user.uid))
  .then(async(url)=>{
    console.log(url)
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: fname,
          last: lname,
          email:email,
          image:url
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  })
});
    location.replace("./login.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
}
else(sweetAlert("your password not same"))

}
else(sweetAlert("email includes @"))
        }
        else(
            sweetAlert("last name must 1 letter ")
        )
         
}
else{
    sweetAlert("first name must 3 letter");
}
})
