"use strict";
const textEl = document.getElementById("text");
const text = "Chouaibe ... ";
const textf = "a devlopper ... ";
const speed = 200;
let tgl = true;
let indx = 1;
//counter
const counters = document.querySelectorAll(".counter");

writeText();
// setTimeout(writeText, 2000);

function writeText() {
  if (tgl === true) {
    textEl.innerText = text.slice(0, indx);
    indx++;
    if (indx > text.length) {
      indx = 1;
      tgl = !tgl;
    }
  } else {
    textEl.innerText = textf.slice(0, indx);
    indx++;
    if (indx > textf.length) {
      indx = 1;
      tgl = !tgl;
    }
  }

  setTimeout(writeText, speed);
}

// //counter

// // const about = document.querySelector(".about");
// window.addEventListener("scroll", (e) => {
//   if (window.pageYOffset === 528) {
//     counters.forEach((counter) => {
//       counter.innerText = "0";
//       const updateCounter = () => {
//         const target = +counter.getAttribute("data-target");
//         const c = +counter.innerText;
//         const increment = target / 200;
//         // console.log(increment);

//         if (c < target) {
//           counter.innerText = `${Math.ceil(c + increment)}`;
//           setTimeout(updateCounter, 1);
//         }
//       };

//       updateCounter();
//     });
//   }
// });

// const scroll = document.querySelector(".header_scroll");
// scroll.addEventListener("click", () => {
//   // window.scrollTo(0, );

//   window.scrollTo({
//     top: document.querySelector(".about").scrollHeight,
//     left: 0,
//     behavior: "smooth",
//   });
// });

// const sects = document.querySelectorAll("section");
// const links = document.querySelectorAll(".nav_link");


// navbar fixed;

window.onscroll = function(){
  let value = scrollY;
  console.log(value);

  

  
  }

