const cardPoster = document.getElementsByClassName("poster")
const img = document.querySelector("img")
const details = document.getElementsByClassName("details")

cardElementRoot.addEventListener("click", (e) => {
    console.log(e.target)




  

    console.log(e.target.classList.contains('active'))
    if (e.target.classList.contains("active")) {
        e.target.classList.remove("active")
    } else {
        e.target.classList.add("active")
    }


})
