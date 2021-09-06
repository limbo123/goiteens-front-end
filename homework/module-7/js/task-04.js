const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");

let counterValue = value.textContent;

incrementButton.addEventListener("click", function increment() {
    counterValue++;
    value.textContent = counterValue;
});
decrementButton.addEventListener("click", function decrement() {
    counterValue--;
    value.textContent = counterValue;
});

