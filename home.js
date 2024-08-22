import {  onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import { auth } from "./config.js";
import { db } from "./config.js";

const logout=document.querySelector('#logout-btn')





onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
  } else {
    console.log(error);
  }
});



logout.addEventListener('click',()=>{
  signOut(auth).then(() => {
    console.log('logout successfully');
    window.location='index.html'
  }).catch((error) => {
    console.log(error);
  });
})

const form =document.querySelector('#form')
const product =document.querySelector('#product')
const productdescripation =document.querySelector('#product-descripation')
const price =document.querySelector('#price')
const  number=document.querySelector('#number')
const name=document.querySelector('#name')
  
form.addEventListener('submit',async(event)=>{
    event.preventDefault();
  
    try {
      const docRef = await addDoc(collection(db, "users"), {
        product:product.value,
        productdescripation:productdescripation.value,
        price:price.value,
        number:number.value,
        name:name.value
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })