



const allCopyBtn = document.querySelectorAll(".btn-copy");

allCopyBtn.forEach((item) => {

  item.addEventListener("click", (eo) => {
    
    navigator.clipboard.writeText(item.nextElementSibling.innerText)
    item.innerText="Copied"

    setTimeout(() => {
        item.innerText="Copy"
    }, 1000)
    
  });
});


