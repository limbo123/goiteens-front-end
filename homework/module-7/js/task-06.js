const input = document.querySelector("#validation-input");

input.addEventListener("blur", event => {
    input.classList = "";
    
    if(event.target.value.length === 6){
        
        input.classList.add("valid"); 
    }else {
        input.classList.add("invalid"); 

    }
});





