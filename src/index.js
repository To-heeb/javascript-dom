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
const ulFromId = document.getElementById('list');
console.log(ulFromId);
ulFromId.append(fragment);

// getElementsByClassName : HTMLCollection
const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
console.log(listItemsFromClassName)

// getElementsByTagName
const listItemsFromTagName = ulFromId.getElementsByTagName('li')
console.log(listItemsFromTagName)

// Demonstrate live collection
const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromId.append(newListItem);

console.log(listItemsFromClassName)
console.log(listItemsFromTagName)




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
