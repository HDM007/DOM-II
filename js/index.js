// Your code goes here
let header = document.querySelector(".main-navigation")


let navContainer = document.querySelector(".nav-container")


let navLinks = document.querySelectorAll(".nav-link")


let containerHome = document.querySelector(".home")

let button = document.querySelector(".btn")
console.log(button)

let destinations = document.querySelectorAll(".destination")

let footer = document.querySelector(".footer")


//1

header.addEventListener("mouseover", function (event){
    header.style.color = "red"
})

//2

navContainer.addEventListener("mousemove", function(event){
    navContainer.style.background = "blue"
})

//3

let intro = containerHome.querySelector(".intro")
console.log(intro)

intro.addEventListener("dblclick", function(event){
    intro.style.color = "blue"
    event.stopPropagation()
})

//4

navLinks.forEach(function (link){
    link.addEventListener("click", function(event){
        event.preventDefault()
    })
})

//5
window.addEventListener("resize", function(){
    alert("Resized window!")
})

//6
window.addEventListener("scroll", function(event){
    navContainer.style.background = "mistyrose"
    event.stopPropagation()
})

//7
destinations[0].addEventListener("select", function(event){
    destinations[0].style.background = "blue"
})


//8
button.addEventListener("focus", (event) => {
    event.target.style.background = "red"
})


//9

document.addEventListener('keydown', function (event) {
    // if event object contains key "ESC", kill Modal.
    if (event.key === "Escape"){
        header.style.display = "none"
    }
})

//10

document.addEventListener('keyup', function (event) {
    // if event object contains key "ESC", kill Modal.
    if (event.key === "Escape"){
        footer.style.display = "none"
    }
})