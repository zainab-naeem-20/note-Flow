const loader = document.querySelector(".loader");
const preCont =  document.querySelector(".pre-cont");

window.addEventListener("load", ()=>{
    // loader.style.width = '100%';

    setTimeout( ()=> {
        preCont.style.display = "none";
    },3000);
});