const allTabs = document.querySelectorAll(".mybtn:not(#createAccount)");
const parentButtons = document.querySelector(".allTabs")

const parentArticals = document.querySelector(".parent-all-article")


allTabs.forEach(  (item, index)  => {

  item.addEventListener("click", (eo) => {
// hover chosen btn
    parentButtons.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
    eo.target.classList.add("active-btn")

// show artical of btn
    parentArticals.getElementsByClassName("active-article")[0].classList.remove("active-article")
    parentArticals.getElementsByClassName("fun-facts")[index].classList.add("active-article")


  });
});

