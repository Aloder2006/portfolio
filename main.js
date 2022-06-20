let menu = document.querySelector(".menu-icon");
let nav = document.querySelector("header");

let menuOpen = false;


menu.addEventListener("click",() => {
  if(!menuOpen){
    menu.classList.add("open");
    nav.style.paddingBottom = "310px";
    menuOpen = true;
  } else {
    menu.classList.remove("open");
    nav.style.paddingBottom = "20px";
    menuOpen = false;
  }
});


/*
let container = document.querySelectorAll("section");

console.log(container);

.addEventListener("click",()=>{
    if(menuOpen === true){
      nav.style.paddingBottom = "20px";
      menu.classList.remove("open");
      menuOpen = false;
      alert ("mk")
}
  });
  
  */
  
  
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".range span");

let nums = document.querySelectorAll(".num");

let started = false;


window.onscroll = function(){
  if (window.scrollY >= section.offsetTop  - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
     spans.forEach((span)=>{
       span.style.width = span.dataset.width;
     });
  }
  
}

function startCount(el){
  let gole = el.dataset.gole;
  let count = setInterval(()=>{
    el.textContent++;
    if (el.textContent == gole) {
      clearInterval(count);
    }
  },700 / gole)
}
