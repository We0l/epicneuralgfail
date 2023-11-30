const popUpEl = document.getElementById("popup")
const closePopUpEl = document.getElementById("close-popup")
const htmlEL = document.getElementById("html")

closePopUpEl.addEventListener("click", function(){
    popUpEl.style.display = "none"
})
