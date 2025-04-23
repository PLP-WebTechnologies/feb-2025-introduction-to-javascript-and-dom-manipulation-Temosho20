//Get elements
const dynamicText = document.getElementById('dynamic-text');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const elementContainer = document.getElementById('element-container')

//Change text content dynamically 
changeTextBtn.addEventListener('click', () => {
  dynamicText.textContent = 'Text change dynamically!';
});

//Modify CSS style
changeStyleBtn.addEventListener('click',  () => {
  dynamicText.style.color = 'blue';
  dynamicText.style.fontSize = '24px';
});

//Add element
addElementBtn.addElementListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'New element added!';
  elementContainer.appendChild(newElement);
});

//Remove element
removeElementBtn.addElementListener('click', () => {
  if (elementContainer.children.length > 0) {
    elementContainer.removeChild(elementContainer.firstchild);
  }
});
