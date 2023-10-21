const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulContainer = document.querySelector('#ingredients')
for ( const ingredient of ingredients){
const newElement = document.createElement('li')
newElement.classList.add('item');
newElement.textContent = ingredient;
ulContainer.append(newElement);
console.log(newElement);
}
