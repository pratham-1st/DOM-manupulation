var card = document.querySelector("#card")
var i = document.querySelector("i")

card.addEventListener("dblclick", function(){
    i.style.transform = 'translate(-50%,-50%) scale(1)'
    i.style.opacity = 1

    setTimeout(function(){
        i.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 500)

    setTimeout(function(){
        i.style.opacity = 0 
    }, 500)
})