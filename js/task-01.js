const numOfList = document.getElementById('categories');
const items = numOfList.querySelectorAll('li.item');
const categoriesNumber = items.length;
console.log('Number of categories: ' + categoriesNumber);
items.forEach(function (item) {
    const titleElement = item.querySelector('h2');
    const categoryName = titleElement.textContent; 
    const subList = item.querySelectorAll('ul li');
    const numSubItems = subList.length;
    console.log('Category: ' + categoryName);
    console.log('Elements: ' + numSubItems);
});