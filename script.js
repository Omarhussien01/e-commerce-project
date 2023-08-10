// Script for navigation bar
const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")

if (bar){
     
    bar.addEventListener('click',()=>{
         nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click',()=>{
         nav.classList.remove('active')
    })
}


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:5000/api/product/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));