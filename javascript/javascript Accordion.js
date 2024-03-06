const allplus = document.querySelectorAll(".plus");

allplus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName("content")[0];
    content.classList.toggle("contentActive")

    
    if (content.classList.contains("contentActive")) {
      content.style.height= `${content.scrollHeight}px`
    } else {
      content.style.height= `0`
    }




    /////// + & - 
    item.classList.toggle("hide-plus")
    if (item.classList.contains("hide-plus")) {
      item.innerText="ــ"
      item.style.transform ="translateY(-11px);"
      
    }else{
      item.innerText="+"
      item.style.transform ="translateY(0);"
    }

  });
});
