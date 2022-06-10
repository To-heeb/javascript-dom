import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<button type="button">
  Add Item
</button>
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
`;

const list = document.querySelector('#list');
const button = document.querySelector('button');
//const items = [...list.querySelectorAll('li')];


function handleClick(event) {
  if (event.target.tagName.toLowerCase() !== 'li') {
    return;
  }
  console.log(event.target.innerText);
}

button.addEventListener('click', () => {
  const items = list.querySelectorAll('li');
  const li = document.createElement('li');
  li.innerText = `Item ${items.length + 1}`;
  list.append(li)
})


// items.forEach((item) => {
//   item.addEventListener('click', handleClick);
// })

list.addEventListener('click', handleClick);



/*
  - NodeTypes
  1: Element
  2: Attribute
  3: Text
  4: CDATASection
  5: EntityReference
  6: Entity
  7: ProcessingInstruction
  8: Comment
  9: Document
  10: DocumentType
  11: DocumentFragment
  12: Notation
*/
