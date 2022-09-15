var myRange = document.getElementById("pageviewRange");
var output = document.getElementById("number");
myRange.value = 100;
var market = document.getElementById("price");
var toggle = document.getElementById("switch");
toggle.checked = false;


var isChecked=false;
var cost = 16;
var pageviews = 100;


toggle.addEventListener('change', e=>{
    if(e.target.checked){
        isChecked = true;
        cost = price(pageviews)*0.75;
    }
    else{
        isChecked = false;
        cost = price(pageviews);
    }
    market.innerHTML = "$" + cost + ".00";
    
});


myRange.addEventListener('input', ()=>{
    console.log(myRange.value); 
    output.innerHTML = myRange.value;
    pageviews = myRange.value;
    
    if(isChecked){
        cost = price(pageviews)* 0.75;
    }
    else{
        cost = price(pageviews);
    }
   
    market.innerHTML = "$" + cost + ".00";           
})

function price(pageviews){

    if(pageviews >= 1000){
        
        return 36;
    }
    
    else if(pageviews >= 500){
       
        return 24;
    }
    else if(pageviews >= 100){
      
        return 16;
    }
    else if(pageviews >= 50){
       
        return 12;
    }
    else if (pageviews >= 10){
       
        return 8;
    }
}
