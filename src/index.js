import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<ul id='list'>
<!-- Hey yoh, I am here -->
  <li>Earth</li>
  <li>Fire</li>
  <li>Water</li>
  <li>Air</li>
</ul>
`;

const list = document.querySelector('#list')
const selectedIndex = 2;

// querySelectorAll: Nodelist
const queryChildren = list.querySelectorAll('li');
console.log(queryChildren[selectedIndex], queryChildren.length)

// .children: HTMLCollection
console.log(list.children[selectedIndex], list.children.length)

// .childNodes: Nodelist
console.log(list.childNodes[selectedIndex], list.childNodes.length)

// first/last
console.log(list.firstChild, list.firstElementChild)
console.log(list.lastChild, list.lastElementChild)







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
