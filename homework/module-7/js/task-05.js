const input = document.querySelector('#name-input');
const output = document.querySelector("#name-output");

input.addEventListener("input", event => {
    
    if(event.target.value.length === 0) {
        output.textContent = "незнакомец";
    }else{
        output.textContent = event.target.value;
    };

    
});
