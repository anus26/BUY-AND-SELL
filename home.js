import {  onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";




onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    window.location='index.html'
  } else {
    console.log(error);
  }
});



// const cardbody =document.querySelector('.card-body');
const logout=document.querySelector('#logout-btn')

logout.addEventListener('click',()=>{
    signOut(auth).then(() => {
        console.log('logout successfully');
        window.location='index.html'
      }).catch((error) => {
        console.log(error);
      });
})