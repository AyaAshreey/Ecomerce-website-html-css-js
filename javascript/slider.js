const slidercontainer = document.getElementById("slidercontainer");
const pre = document.getElementById("pre");
const next = document.getElementById("next");

const arrimg = [
  `<img  class="slider-img" src="/imgs/pexels-jan-van-der-wolf-19528148.jpg">`,
  `<img class="slider-img" src="/imgs/pexels-andreea-ch-3610212.jpg">`,
  `<img class="slider-img" src="/imgs/pexels-marco-de-assis-7873597.jpg">`,
  `<img class="slider-img" src="/imgs/pexels-mihman-duğanlı-19814661.jpg">`,
  `<img class="slider-img" src="/imgs/pexels-amar-preciado-20341343.jpg">`,
];

let i = 0;
slidercontainer.innerHTML += arrimg[i];
pre.setAttribute("disabled", "");
slidercontainer.innerHTML += `<p> slide #${i + 1} of  ${arrimg.length} </p>`;

next.addEventListener("click", (eo) => {
  pre.removeAttribute("disabled");
  i++;
  slidercontainer.innerHTML += arrimg[i];
  slidercontainer.innerHTML += `<p> slide #${i + 1} of ${arrimg.length} </p>`;

  if (i + 1 == arrimg.length) {
    next.setAttribute("disabled", "");
  }

  parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
  parentNumbers.getElementsByTagName("button")[i].classList.add("active-num")
});

pre.addEventListener("click", (eo) => {
  next.removeAttribute("disabled");
  i--;
  slidercontainer.innerHTML += arrimg[i];
  slidercontainer.innerHTML += `<p> slide #${i + 1} of  ${arrimg.length} </p>`;

  if (i == 0) {
    pre.setAttribute("disabled", "");
  }

  parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
  parentNumbers.getElementsByTagName("button")[i].classList.add("active-num")
});


// change active button number
const allButtons = document.querySelectorAll(".mynumber");
const parentNumbers = document.getElementsByClassName("numbers")[0];

allButtons.forEach((item,index) => {
  item.addEventListener("click", (eo) => {
    parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
    item.classList.add("active-num")
    slidercontainer.innerHTML += arrimg[index];
    slidercontainer.innerHTML += `<p> slide #${index + 1} of  ${arrimg.length} </p>`;

    i = index

    if (index == arrimg.length-1 ) {
    next.setAttribute("disabled","")
    pre.removeAttribute("disabled")
        
    }else if (index== 0 ) {
        pre.setAttribute("disabled","")
        next.removeAttribute("disabled")
    }else{
        next.removeAttribute("disabled")
        pre.removeAttribute("disabled")
    }



  });
});
