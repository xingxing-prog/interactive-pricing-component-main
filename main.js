var myRange = document.getElementById("pageviewRange");
var output = document.getElementById("number");
myRange.value = 100;



myRange.addEventListener('click', ()=>{
    console.log(myRange.value); 
    output.innerHTML = myRange.value;
})

