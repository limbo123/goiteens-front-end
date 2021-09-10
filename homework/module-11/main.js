class CountdownTimer {
    constructor({ selector, targetDate, onTick }){
        this.selector = selector, 
        this.targetDate = targetDate,
        this.onTick = onTick
    };

    start() {
        
        const startTime = new Date(this.targetDate);
        setInterval(() => {
        const deltaTime = startTime - Date.now();
        const { days, hours, mins, secs } = this.timeRounding(deltaTime);
        this.onTick({ days, hours, mins, secs })}, 1000); 
    }

    timeRounding(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        
        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }

};

function renderToHTML({ days, hours, mins, secs }) {
    const values = document.querySelectorAll(`${this.selector} .value`);
    values[0].textContent = days;
    values[1].textContent = hours;
    values[2].textContent = mins;
    values[3].textContent = secs;
    
}


const timer =  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
    onTick: renderToHTML,
  });
  
timer.start();