/////////// change section background color code by me

// const sec = document.querySelectorAll("section");
// const sectionbg = document.getElementById("sectionbg");
// sectionbg.addEventListener("click", (eo) => {
//   sec.forEach((item) => {
//     item.style.backgroundColor = `hsl(${changecolor()}, 50%, 50%)`;
//   });
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// another code to change section background color
//////////// using array & i++
//////////// السكشنين هيكونو بنفس اللون مع بعض

// const arrclolrs = ["#E49273", "#A8D0DB", "#2B4570", "#A37A74", "#7180AC"];
// let i = 0;
// const sectionbg = document.getElementById("sectionbg");
// sectionbg.addEventListener("click", (eo) => {
//   const allsec = document.querySelectorAll("section");
//   allsec.forEach((item) => {

//     item.style.backgroundColor = arrclolrs[i];
//   });
//   i++;
//   if (i > arrclolrs.length -1) {
//     i = 0;
//   }
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// another code to change section background color
//////////// using array & math.random()
//////////// السكشنين هيكونو بنفس اللون مع بعض

// const arrclolrs = ["#E49273", "#A8D0DB", "#2B4570", "#A37A74", "#7180AC"];

// const sectionbg = document.getElementById("sectionbg");

// sectionbg.addEventListener("click", (eo) => {

//   const random = Math.floor(Math.random() * arrclolrs.length);
//   const allsec = document.querySelectorAll("section");
//   allsec.forEach((item) => {

//     item.style.backgroundColor = arrclolrs[random];

//   });
// });

//////////// another code to change section background color
//////////// using rgb & return function
//////////// السكشنين هيكونو بنفس اللون مع بعض

// const random255 = () => {
//   return Math.round(Math.random() * 255);
// }

// const sectionbg = document.getElementById("sectionbg");

// sectionbg.addEventListener("click", (eo) => {

//   const random1 = random255()
//   const random2 = random255()
//   const random3 = random255()

//   const allsec = document.querySelectorAll("section");
//   allsec.forEach((item) => {

//     item.style.backgroundColor = `rgb(${random1},${random2},${random3})`

//   });
// });

//////////// another code to change section background color
//////////// using hexa
//////////// السكشنين هيكونو بنفس اللون مع بعض

// const sectionbg = document.getElementById("sectionbg");

// sectionbg.addEventListener("click", (eo) => {

//   const hexarandom = Math.random().toString(16).slice(2,8)

//   const allsec = document.querySelectorAll("section");
//   allsec.forEach((item) => {

//     item.style.backgroundColor = `#${hexarandom}`

//   });
// });

//////////// another code to change section background color
//////////// using hexa & do not use forEach
//////////// السكشنين هيكونو بنفس اللون مع بعض

// const sectionbg = document.getElementById("sectionbg");

// sectionbg.addEventListener("click", (eo) => {

//   const hexarandom = Math.random().toString(16).slice(2,8)

//   const allsec = document.querySelectorAll("section");
//   for (let i = 0; i < allsec.length; i++) {
//     const item = allsec[i];
//     item.style.backgroundColor = `#${hexarandom}`
//   }
// });

//////////// another code to change section background color
//////////// using hexa & do not use forEach OR for loop
//////////// السكشنين هيكونو بنفس اللون مع بعض

const sectionbg = document.getElementById("sectionbg");

sectionbg.addEventListener("click", (eo) => {
  const hexarandom = Math.random().toString(16).slice(2, 8);

  const allsec = document.querySelectorAll("section");

  // for (const i in allsec ) {
  //   const item = allsec[i]
  //   item.style.backgroundColor = `#${hexarandom}`
  // }

  // for (const i of allsec ) {
  //   const item = i
  //   item.style.backgroundColor = `#${hexarandom}`
  // }

  // let i = 0;
  // while (i < allsec.length) {
  //   const item = allsec[i];
  //   item.style.backgroundColor = `#${hexarandom}`;
  //   i++
  // }

  // let i = 0;
  // do {
  //   const item = allsec[i];
  //   item.style.backgroundColor = `#${hexarandom}`;
  //   i++
  // } while (i < allsec.length);


  let i = 0
  for (; ; ) {
    if (i < allsec.length) {
      const item = allsec[i];
      item.style.backgroundColor = `#${hexarandom}`
      i++
      } else {break}
   }


   
});
