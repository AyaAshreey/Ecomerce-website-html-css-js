
const blackScreen = document.getElementById("blackScreen");


//////////////////////////////////// total price function
const updateTotalPrice = () => {
  const allProductsInBlackScreen = document.querySelectorAll(".item-container");
  let total = 0;
  allProductsInBlackScreen.forEach((item) => {
    const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    const quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );
    total = total + price * quantity;
    
  });
  totalPrice.innerText = ` ${total}  $`;
};

///////////// total price dinamic

blackScreen.addEventListener("change", (eo) => {
  updateTotalPrice();
});



///////////// btn delete to remove item in black screen

blackScreen.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {

    eo.target.parentElement.remove()
    updateTotalPrice();

  const nameOfDeletedProduct = eo.target.parentElement.getElementsByClassName("product-name")[0].innerText


  const allCards = document.querySelectorAll(".card")

  allCards.forEach(item => {

    const nameOfProductInCard = item.getElementsByClassName("card-title")[0].innerText
////////////// problem in this code 
    if (nameOfDeletedProduct == nameOfProductInCard) {

      const doneButton = item.getElementsByClassName("btn-success")[0]
      
      doneButton.removeAttribute("disabled")
      doneButton.classList.remove("btn-success")
      doneButton.classList.add("btn-primary")
      doneButton.innerText = "buy"
      


    }
    
    
  })
  
  
  




  }
});






//////////////////////////////////////
const allBuyBtns = document.querySelectorAll(".btn-primary");
const showItems = document.createElement("div");

allBuyBtns.forEach((item) => {
  item.addEventListener("click", (eo) => {
    //////// codes for Buy buttons to turn into done btns
    {
      item.setAttribute("disabled", "");
      item.classList.remove("btn-primary");
      item.classList.add("btn-success");
      item.innerHTML = "&#10004; Done";
    }

    ////////// pop up added to cart
    {
      const body = document.getElementById("body");
      const popUp = document.createElement("div");
      body.append(popUp);
      popUp.classList.add("done-popup");
      popUp.innerText = "Added To Cart";

      setTimeout(() => {
        popUp.style.transform = "translateX(-60vw)";
      }, 1000);
      setTimeout(() => {
        popUp.remove();
      }, 4000);
    }

    ////////////// added Button
    {
      body.append(showItems);
      showItems.classList.add("show-items");
      showItems.innerText = "عرض المشتريات ";
    }

    //////////////// add img $ name $ price from care to black screen
    const card = item.parentElement.parentElement.parentElement;
    const imgSrc = card
      .getElementsByClassName("card-img-top")[0]
      .getAttribute("src");
    const itemName = card.getElementsByClassName("card-title")[0].innerText;
    const itemPrice = card.getElementsByClassName("price")[0].innerText;

    const allProducts = document.getElementById("allProducts");

    const addedProduct = `   
<div dir="rtl" id="itemContainer" class="item-container">

    <div class="img-title-parent">
      <img src="${imgSrc}" alt="">
      <p class="product-name"> ${itemName} </p>
    </div>


    <div style="display: flex; align-items: center;" class="input-title-parent">
      <input class="input-quantity" dir="ltr" id="input-quantity" min="1" value="1" type="number">
      <p> Quantity </p>

    </div>


    <div class="price">
    ${itemPrice}
    </div>

    <div class="btn btn-secondary ">
      Delete 
    </div>

</div>`;

    allProducts.innerHTML += addedProduct;

    updateTotalPrice();
  });
});
/////////////////////////////////////////
const close = document.getElementById("close");
const itemContainer = document.getElementById("itemContainer");

close.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(-110vw)";
  //itemContainer
});

showItems.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(0)";
});
