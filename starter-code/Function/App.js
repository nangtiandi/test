
// for hamburger
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

// for nav bar bg
if(window.screen.width <= 1000){
  document.getElementById("nav").classList.remove("px-3")
}


// navscroll
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;
  console.log(docScrollTop)
  // if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector(".nav").classList.add("fixed");
      document.querySelector(".nav").classList.remove("mt-3");
      // console.log("have been added")
    } else {
      document.querySelector(".nav").classList.remove("fixed");
      
      // console.log("have been removed")

    }
  // }
}


// $("#")