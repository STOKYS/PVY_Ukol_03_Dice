let x = document.querySelectorAll("button")

window.addEventListener("load", function(){
    for (i = 0; i < x.length; i++){
        x[i].style.opacity = 1
    }
    document.getElementsByTagName("H1")[0].style.opacity = 1
})

x[0].addEventListener("mouseenter", function(){
    this.style.fontSize = "100px"
    this.style.borderColor = "red"
    this.style.color = "red"
})

x[0].addEventListener("mouseleave", function(){
    this.style.fontSize = "85px"
    this.style.borderColor = "white"
    this.style.color = "white"
})

x[0].addEventListener("click", function(){
    window.open('pages/game/index.html', '_blank')
})

x[1].addEventListener("mouseenter", function(){
    this.style.fontSize = "100px"
    this.style.borderColor = "blue"
    this.style.color = "blue"
})

x[1].addEventListener("mouseleave", function(){
    this.style.fontSize = "85px"
    this.style.borderColor = "white"
    this.style.color = "white"
})

x[1].addEventListener("click", function(){
    window.open('pages/simple/index.html', '_blank')
})