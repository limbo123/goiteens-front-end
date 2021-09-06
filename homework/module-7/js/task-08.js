const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = controls.children[0];
const createButton = controls.children[1];
const clearButton = controls.children[2];


    
    createButton.addEventListener("click", event => {
        const value = input.value;
        let width = 30;
        let height = 30;
        for(let i = 1; i <= value; i++){
            
            const div = document.createElement("div");
            div.style.width = `${width}px`;
            div.style.height = `${height}px`; 
            div.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; 
            div.style.marginBottom = "10px";
            boxes.appendChild(div);
            width = width + 10;
            height = height + 10;
        }
    });

    clearButton.addEventListener("click", event => {
        boxes.innerHTML = "";
    })


