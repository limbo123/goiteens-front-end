const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ]; 
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let startBtnIsUnlocked = true;
  let colorChanging = null;

    let startChanging = refs.startBtn.addEventListener("click", () => {
        if(startBtnIsUnlocked) {
            startBtnIsUnlocked = false;
            colorChanging = setInterval(()=> {
                refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
            }, 1000);
        };
        
    });

    

    refs.stopBtn.addEventListener("click", () => {
        clearInterval(colorChanging);
        startBtnIsUnlocked = true;
    })
  



