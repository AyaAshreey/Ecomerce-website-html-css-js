const container = document.getElementById("container");
const title = document.getElementById("title");

container.style.border = "5px solid red";

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "btn btn-primary":
      title.innerText = "primary";
      title.style.marginTop = "50px"
      break;

    case "btn btn-secondary":
      title.innerText = "secondary";
      break;

    case "btn btn-success":
      title.innerText = "success";
      break;

    case "btn btn-danger":
      title.innerText = "danger";
      break;

      case "btn btn-warning":
        title.innerText = "warning";
        break;


        case "btn btn-info":
        title.innerText = "info";
        break;


        case "btn btn-light":
        title.innerText = "light";
        break;


        case "btn btn-dark":
        title.innerText = "dark";
        break;

      

    default:
        title.innerText = "ERROR ";
      break;
  }
});
