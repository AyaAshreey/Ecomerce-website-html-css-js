const randomhearts = document.getElementById("randomhearts");
const containerheart = document.getElementById("containerheart");


const dropRandomHearts = () => {
  const parentHeart = document.createElement("div");
  containerheart.append(parentHeart);


  const createRandomHearts = setInterval(() => {
    //   const heart = `<div class="heart"> &#128153; </div>`;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = `&#128153;`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${  (Math.random() + 0.5)  * 1.5}s`

    const heart2 = document.createElement("div");
    heart2.classList.add("heart");
    heart2.innerHTML = ` &#128155;`;
    heart2.style.left = `${Math.random() * 100}%`;
    heart2.style.animationDuration = `${  (Math.random() + 0.5)  * 1.5}s`
   

    parentHeart.append(heart)
    parentHeart.append(heart2)

  }, 50);

  setInterval(() => {
    clearInterval(createRandomHearts);
  }, 3000);

  setTimeout(() => {
    parentHeart.remove();
  }, 4000);

}


randomhearts.addEventListener("click", (eo) => {

  dropRandomHearts()
  
});
