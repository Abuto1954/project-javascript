//setting initial value to zero
let count=0

//selecting the value and the buttons
let value=document.getElementById("value")
let button=document.querySelectorAll(".btn")

//looking through the buttons
button.forEach(function(btn){
btn.addEventListener("click",function(e){
const style=e.currentTarget.classList
if(style.contains("decrease")){
count--;
}   else if(style.contains("increase")){
 count++   
} else{
    count=0
}
//additional of colors when clicking
if(count>0){
    value.style.color="green"
}
if(count<0){
    value.style.color="red"
}
if(count===0){
    value.style.color="black"
}
//setting content to our count
value.textContent=count
})
})
