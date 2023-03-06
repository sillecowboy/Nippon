/*sticky header*/
window.onscroll = function() {stickyheader()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var stickylogo = document.getElementById("stickylogo");

function stickyheader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    stickylogo.style.visibility = "visible"; 
  } else {
    header.classList.remove("sticky");
    stickylogo.style.visibility = "hidden"; 
  }
};




const output = document.getElementById("output"); 
const veganerkassen = document.getElementById("veganerkassen");
const luksuskassen = document.getElementById("luksuskassen");
const familiekassen = document.getElementById("familiekassen");

const hoejrePil = document.getElementById("hoejrePil");
const venstrePil = document.getElementById("venstrePil");

const carousel = [veganerkassen, luksuskassen, familiekassen];

carousel[0].style.display = "block";
carousel[1].style.display = "none";
carousel[2].style.display = "none";

hoejrePil.addEventListener("click", naesteBillede);
venstrePil.addEventListener("click", forrigeBillede);

function naesteBillede(){
    carousel[0].style.display = "none"; 
    carousel.push(carousel[0]); 
    carousel.shift(); 
    carousel[0].style.display = "block"; 
    }

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[carousel.length-1]);
    carousel.pop();
    carousel[0].style.display = "block";
    }





