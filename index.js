
const btn = document.querySelectorAll(".button");
const body =document.querySelector('body');

btn.forEach(function(button){
    console.log("button");
    button.addEventListener("click", function(e){
        console.log("e");
        if(e.target.id === "grey"){
            body.style.backgroundColor = 'grey';   
             }
    })
    button.addEventListener("click", function(e){
        console.log("e");
        if(e.target.id === "yellow"){
            body.style.backgroundColor = 'yellow';   
             }
    })
    button.addEventListener("click", function(e){
        console.log("e");
        if(e.target.id === "red"){
            body.style.backgroundColor = 'red';   
             }
    })
    button.addEventListener("click", function(e){
        console.log("e");
        if(e.target.id === "blue"){
            body.style.backgroundColor = 'blue';   
             }
    })
    button.addEventListener("click", function(e){
        console.log("e");
        if(e.target.id === "purple"){
            body.style.backgroundColor = 'purple';   
             }
    })
})