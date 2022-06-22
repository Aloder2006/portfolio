let menu = document.querySelector(".menu-icon");
let nav = document.querySelector("header");
let projectBox = document.querySelectorAll(".project-box");

let menuOpen = false;


menu.addEventListener("click",() => {
  if(!menuOpen){
    nav.style.paddingBottom = "310px";
    menuOpen = true;
  } else {
    nav.style.paddingBottom = "20px";
    menuOpen = false;
  }
});

let container = document.querySelectorAll("section");

container.forEach((cont)=>{
  cont.addEventListener("click",()=>{
if(menuOpen === true){
      nav.style.paddingBottom = "20px";
      menuOpen = false;
  }
  });
});

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
  };
  if (window.scrollY >= 730) {
    projectBox[0].style.transform = "translateX(0)";
    projectBox[0].style.opacity = "1";
  };
  if (window.scrollY >= 1000) {
    projectBox[1].style.transform = "translateX(0)";
    projectBox[1].style.opacity = "1";
  };
  if (window.scrollY >= 1270) {
    projectBox[2].style.transform = "translateX(0)";
    projectBox[2].style.opacity = "1";
  };
  if (window.scrollY >= 1540) {
    projectBox[3].style.transform = "translateX(0)";
    projectBox[3].style.opacity = "1";
  }
  console.log(window.scrollY);
}

function startCount(el){
  let gole = el.dataset.gole;
  let count = setInterval(()=>{
    el.textContent++;
    if (el.textContent == gole) {
      clearInterval(count);
    }
  },1000 / gole)
}


let scroolToUp = document.querySelector(".to-up");

scroolToUp.addEventListener("click",()=>{
  window.scrollTo({
    top: 0,
    behavior : "smooth"
  });
});
