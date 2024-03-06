// random videos

const randomVideo = document.getElementById("randomVideo");
const containeriframe = document.getElementById("containeriframe");

let i = 0;
randomVideo.addEventListener("click", (eo) => {
  const videoArr = [
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/e9dZQelULDk?si=kkeR-hM7N12K3kEp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/V6ui161NyTg?si=bU_c2ADlEyHIQszJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/iNyUmbmQQZg?si=FWeI3lU8M0G38-BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/CqgmozFr_GM?si=7hinvGZQFSmcI5W5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/dNVZ0ZPfE8s?si=4LrS0V_fo92eJfK1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  ];

  containeriframe.innerHTML = videoArr[i];
  i++;
  if (i == videoArr.length) {
    i = 0;
  }

  //containeriframe.innerHTML = videoArr[Math.round(Math.random() * videoArr.length -1)]
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const parentqouts = document.getElementById("parentqouts");
const randomQuotes = document.getElementById("randomQuotes");
let x = 0;
randomQuotes.addEventListener("click", (eo) => {
  const qouteArr = [
    `<blockquote class="sidekick">You have to believe in yourself when no one else does.<br><cite> Serena Williams </cite></blockquote>`,
    `<blockquote class="sidekick">When you have a dream, you’ve got to grab it and never let go.<br><cite> Carol Burnett </cite></blockquote>`,
    `<blockquote class="sidekick">The most important thing is to enjoy your life—to be happy—it’s all that matters.<br><cite> Steve Jobs </cite></blockquote>`,
    `<blockquote class="sidekick">Spread love everywhere you go. Let no one ever come without leaving happier.<br><cite> Mother Teresa  </cite></blockquote>`,
    `<blockquote class="sidekick">Be yourself; everyone else is already taken.<br><cite> Oscar Wilde </cite></blockquote>`,
    `<blockquote class="sidekick">The biggest adventure you can take is to live the life of your dreams.<br><cite> Oprah Winfrey </cite></blockquote>`,
  ];
  parentqouts.innerHTML = qouteArr[x];
  x++;
  if (x == qouteArr.length) {
    x = 0;
  }


  // dropRandomHearts()
});
