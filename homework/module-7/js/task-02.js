const ul_ingredients = document.querySelector("#ingredients");
console.log(ul_ingredients);

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ul_ingredients.appendChild(li);
})