const categories = document.querySelector("#categories");
const li_item = document.querySelectorAll(".item");
const itemContent = document.querySelectorAll(".item ul")

console.log(`У списку ${li_item.length} категорії`);

for(let i = 0; i < li_item.length; i++) {
    
    console.log(`Категорія: ${li_item[i].children[0].textContent}`);
    console.log(`Кількість елементів: ${itemContent[i].children.length}`);
};




