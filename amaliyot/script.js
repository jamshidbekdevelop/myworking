// document.addEventListener("DOMContentLoaded", () => {
//   const loader = document.querySelector(".loader");
//   setTimeout(function () {
//     loader.style.opacity = "0";
//     setTimeout(function () {
//       loader.style.display = "none";
//     }, 30000);
//   }, 3500);
// });

// const data= new Date()
// console.log(data.getHours())
// console.log(data.getUTCHours())
// console.log(data.getTimezoneOffset())
// console.log(data.getTime())

// const startData=new Date()
// console.log(startData.getTime());
// for (let i = 0; i < 100000; i++) {
//     let tie=i **3
// }

// const endData=new Date()
// console.log(endData.getTime());
// alert(`Timeda ${endData- startData} chiqdi`)

/// This
// 1-usul //////////////////////////////////////////////////////////////

// oddiy funcsiyalarda this =window , agar, "use strict" = undefined
// function showTHis(a, b) {
//   console.log(this);
//   function calf() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(calf());
// }
// showTHis(8, 9);

// 2-usul //////////////////////////////////////////////////////////////
// Context this objectlada =object

// const obj = {
//   a: 7,
//   b: 9,
//   calc: function () {
//     console.log(this.a + this.b);
//   },
// };
// obj.calc()

// 3-usul //////////////////////////////////////////////////////////////

//  Context this Constructor va Classlarda =yangi object copy
// function Car(car, color) {
//   this.car = car;
//   this.color = color;
//   this.hi = function () {
//     console.log("hi");
//   };
// }

// const mers = new Car("Jip", "blue");
// console.log(mers);
// mers.hi();

// 4-usul //////////////////////////////////////////////////////////////

// context this qol yordamida ergashtirish: call, apply, bind,

// function pe(surname) {
//   console.log(this);
//   console.log(this.name + " " + surname);
// }
// const person = {
//   name: "Jamshidbek",
// };
// pe.call(person, "Sharipov");
// pe.apply(person, ["Sharipov"]);

// function calc(num){
//     return this * num
// }
// const double=calc.bind(3)
// console.log(double(9));
// console.log(double(30));

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  this.style.background = "red";
});

// this = e.target
// ()=>{}da this yoq bunda e.target ishlatamiz