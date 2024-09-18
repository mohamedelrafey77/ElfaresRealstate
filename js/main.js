
// ================== js for preloader
function counter(){
  var count = setInterval(function(){
      var c = parseInt($('.counter').text());
      $('.counter').text((++c).toString());
      if(c == 100){
          clearInterval(count);
          $('.counter').addClass('hide');
          $('.preloader').addClass('hide')
      }
  } , 10)
}

counter()


// ===============================
// js for mouse effect
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#7b4080",
  "#fdaf69",
  "#7b4080",
  "#723b86",
  "#ef865e",
  "#ec805d",
  "#723b86",
  "#df685c",
  "#d5585c",
  "#723b86",
  "#c5415d",
  "#7b4080",
  "#b22c5e",
  "#ac265e",
  "#723b86",
  "#950f5f",
  "#830060",
  "#723b86",
  "#680060",
  "#60005f",
  "#48005f",
  "#723b86",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// ======================== js for wow js

new WOW().init();

//====================== start js for nav-fixed top and scroll to top 
var scroll = document.querySelector(".scroll");
var navfixed = document.querySelector("nav");
window.onscroll = function(){
  if(window.scrollY > 100){
    scroll.classList.add("show")
    navfixed.classList.add("nav-fixed")
  }
  else{
    scroll.classList.remove("show")
    navfixed.classList.remove("nav-fixed")
  }
}

scroll.onclick = function(){
  window.scrollTo({
    top : '0' , 
    behavior : "smooth"
  })
}

// ======================== js for mobile menu responsive 

var open_menu = document.querySelector(".open-menu");
var mobile_menu = document.querySelector(".mobile-menu");
var close_mobile_menu = document.querySelector(".close-mobile-menu");

open_menu.onclick = function(){
  mobile_menu.style.right = "0%"
}
close_mobile_menu.onclick = function(){
  mobile_menu.style.right = "-200%"
}
// ======================== js for making rotate char again to the trending section

// var alltext2 = document.querySelector(".gallery .rotate-circle .text p");

// alltext2.innerHTML = alltext2.innerText.split('').map((char2 , i2)=>
//   `<span style="transform:rotate(${i2 * 14.6}deg)">${char2}</span>`).join('');

// ========================= js for slick slider at the recommended section
$(document).ready(function(){
    $('.myslider').slick({
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      rtl : true ,
      autoplay : true ,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    })
})