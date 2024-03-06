/////////////////// dark mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

//////////////////////////// dispaly change color list
{
  const changecolor = document.getElementById("changecolor");
  const hiddenul = document.getElementById("hiddenul");

  changecolor.addEventListener("mousemove", (eo) => {
    hiddenul.style.display = "block";
  });

  changecolor.addEventListener("mouseout", (eo) => {
    hiddenul.style.display = "none";
  });
}

//////// change header background
const headerbg = document.getElementById("headerbg");
const header = document.getElementById("header");
const headerh1 = document.getElementById("headerh1");
headerbg.addEventListener("click", (eo) => {
  const random = Math.round(Math.random() * 360);
  header.style.backgroundColor = `hsl(${random}, 50%, 50%)`;
  headerh1.style.backgroundColor = `hsl(${random}, 50%, 50%)`;
});

////////////////////////////////////// change h1 background color when click on "Title BG"
titlebg.addEventListener("click", (eo) => {
  const alltitles = document.querySelectorAll("h1:not(#headerh1)");
  const random = Math.round(Math.random() * 360);

  alltitles.forEach((item) => {
    
    item.style.backgroundColor = `hsl(${random}, 50%, 50%)`;
  });
});


////////////////////////////////////// change h1 font color when click on "Title color"

const changecolor = () => {
  return Math.round(Math.random() * 360);
};

titlecolor.addEventListener("click", (eo) => {
  const alltitles = document.querySelectorAll("h1:not(#headerh1)");

  alltitles.forEach((item) => {

     item.style.color = `hsl(${changecolor()}, 50%, 50%)`;

  });
});

