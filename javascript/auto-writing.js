
let counter=1
const autowriting = () => {

  const title = "Courses4Arab"
  headerh1.innerText= title.slice(0,counter)
  counter++
    if (title.length < counter) {
        // counter=1                   // auto writing alwyes repeate
        clearInterval(stopautofunc)   //stop auto Writing
    }

}
const stopautofunc = setInterval(autowriting , 100)

