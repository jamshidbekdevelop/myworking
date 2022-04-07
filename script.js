// alert('jashidbek')   eslatma

// const userAge=confirm('Yoshingiz 18dami')
// console.log(userAge); /// Savol true or false

// const answer = [];
// answer[0] = prompt("Ismingiz nima");
// answer[1] = prompt("Familyangiz nima");
// answer[2] = prompt("Yoshingiz nechida");
// console.log(answer);  //// malumot

//////// 2-malumotlar

// const xName=prompt('your name')
//  console.log(`user's name ${xName}`);

// 1-Topshiriq

// const numberOfNews=+prompt("Siz qancha yangilik kordingiz")
// // // // console.log(numberOfNews);

// const perse={
//     const: numberOfNews,
//     news: {},
//     actors: {},
//     geners: [],
//     privat: false,
// }

// const a = prompt("oxirgi korgan yangiliklardan biri");
// b = prompt("unga qancha baxo bergan bolar edingiz");

// perse.news[a]=b // obyekt qivolish

// console.log(perse);

// 3-malumot
// for(let i=0; i<=10; i++){
//     if(i== 5){
//         continue
//     }
//     console.log(i);
// }
// javobi:
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10
//  5 ni tashab ketyapti

// 2-Topshiriq

// const numberOfNews = +prompt("Siz qancha yangilik kordingiz");
// const perse = {
//   const: numberOfNews,
//   news: {},
//   actors: {},
//   geners: [],
//   privat: false,
// };
// for (let i = 0; i < 1; i++) {
//   const a = prompt("oxirgi korgan yangiliklardan biri");
//   b = prompt("unga qancha baxo bergan bolar edingiz");
//   if (
//     a != null &&
//     b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50 &&
//     b.length < 50
//   ) {
//     perse.news[a] = b;
//     console.log('tayyor');
//   }else{
//       console.log('error');
//       i--
//   }
// }
// if(perse.const< 10){
//     console.log('siz kam yangilik koribsiz');
// }else if(perse.const>= 10 || perse.const<= 29 ){
//     console.log('kop qiziquvchan ekansiz');
// }

// console.log(perse);

// const obj = {
//   name: "Div",
//   width: 300,
//   hieght: 200,
//   color: {
//     border: "red",
//     bg: "blue",
//   },
// };
// for (let key in obj) {
//   if (typeof obj[key] == "object") {
//     for (let i in obj[key]) {
//       console.log(`Property ${key} value ${obj[key][i]}`);
//     }
//   } else {
//     console.log(`Property ${key} value ${obj[key]}`);
//   }
//   // console.log(key);
// }

// const hi=()=>{
//   console.log('hello Function');
// }

// const btn = document.querySelector("#btn");
// btn.onclick = function () {
//   console.log("Hello World");
// };

// btn.addEventListener("click", ()=>{
//   console.log("Hello World");
// })
// btn.addEventListener("mouseover", ()=>{
//   console.log("Hello Hover");
// })

// index=0
// const calFunc=()=>{
//   console.log('hello ');
//   console.log(++index);
//   if(index==4){
//     console.log('siz kop ezdingiz');
//     btn.removeEventListener('click', calFunc )
//   }
// } 

// btn.addEventListener('click', calFunc )

const btns =document.querySelectorAll("button")


// console.log(btns[0].classList.length);
// console.log(btns[0].classList.length);

btns[0].addEventListener("click", ()=>{
  if (!btns[1].classList.contains("blue")) {
    btns[1].classList.add("blue")
  } else {
    btns[1].classList.remove("blue")
  
  }
})