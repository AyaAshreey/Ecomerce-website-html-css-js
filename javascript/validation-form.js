const ActiveReg = () => {
  const regBtn = document.getElementById("regBtn");
  if (
    username.classList.contains("success") &&
    email.classList.contains("success") &&
    psw.classList.contains("success") &&
    pswRepeat.classList.contains("success")
  ) {
    regBtn.removeAttribute("disabled");
  } else {
    regBtn.setAttribute("disabled", "");
  }
};

/// validate username
const username = document.getElementById("username");
const usermsg = document.getElementById("usermsg");

username.addEventListener("keyup", (eo) => {
  username.classList.add("error");
  usermsg.style.display = "block";

  if (username.value.length > 2) {
    username.classList.add("success");
    usermsg.style.display = "none";
    username.nextElementSibling.style.opacity = "1";
  } else {
    username.classList.remove("success");
    usermsg.style.display = "block";
    username.nextElementSibling.style.opacity = "0";
  }

  ActiveReg();
});

/// validate email
const email = document.getElementById("email");
const emailmsg = document.getElementById("emailmsg");
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener("keyup", (eo) => {
  email.classList.add("error");
  emailmsg.style.display = "block";

  if (regEmail.test(email.value)) {
    email.nextElementSibling.style.opacity = "1";
    email.classList.add("success");
    emailmsg.style.display = "none";
  } else {
    email.nextElementSibling.style.opacity = "0";
    email.classList.remove("success");
    emailmsg.style.display = "block";
  }
  ActiveReg();
});

/// validate password
const psw = document.getElementById("psw");
const passMsg = document.getElementById("passMsg");
const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

psw.addEventListener("keyup", (eo) => {
  psw.classList.add("error");
  passMsg.style.display = "block";

  if (regPassword.test(psw.value)) {
    psw.nextElementSibling.style.opacity = "1";
    psw.classList.add("success");
    passMsg.style.display = "none";
  } else {
    psw.nextElementSibling.style.opacity = "0";
    psw.classList.remove("success");
    passMsg.style.display = "block";
  }
  ActiveReg();
});

/// validate password Repeat
const pswRepeat = document.getElementById("pswRepeat");
const repateMsg = document.getElementById("repateMsg");

pswRepeat.addEventListener("keyup", (eo) => {
  pswRepeat.classList.add("error");
  pswRepeat.style.display = "block";
  if (psw.value == pswRepeat.value) {
    pswRepeat.nextElementSibling.style.opacity = "1";
    pswRepeat.classList.add("success");
    repateMsg.style.display = "none";
  } else {
    pswRepeat.nextElementSibling.style.opacity = "0";
    pswRepeat.classList.remove("success");
    repateMsg.style.display = "block";
  }
  ActiveReg();
});

//////////////////////  Create Account

const createAccount = document.getElementById("createAccount");
const parentOfForm = document.getElementById("parentOfForm");
const close = document.getElementById("close");

const formBody = document.getElementById("formBody") 

createAccount.addEventListener("click", (eo) => {
  parentOfForm.style.display = "flex";
  setTimeout(() => {
    formBody.style.transform="scale(1)"
  }, 100)
  
  
});

close.addEventListener("click", (eo) => {
    formBody.style.transform="scale(0)"
    setTimeout(() => {
        parentOfForm.style.display = "none";
    }, 500)
    
    
  });


 


  
