import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<ul id='list'></ul>
`;

const data = ['Earth', 'Fire', 'Water']
const fragment = document.createDocumentFragment()

data.forEach(items => {
  const li = document.createElement('li')
  li.className = 'list-item';
  li.innerHTML = items;
  fragment.append(li);
})

// getElementById : HTMLElement
const ulFromQuerySelector = document.querySelector('#list');
console.log(ulFromQuerySelector)

ulFromQuerySelector.append(fragment)

const listItemFromQuerySelectorAll = document.querySelectorAll('.list-item');
console.log(listItemFromQuerySelectorAll)

const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromQuerySelector.append(newListItem);
console.log(listItemFromQuerySelectorAll, document.querySelectorAll('.list-item'))




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
