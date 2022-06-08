import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<ul id='list'>
  <li>Earth</li>
  <li>Fire</li>
  <li>Water</li>
  <li>Air</li>
</ul>
`;

const listItems = document.querySelectorAll('#list li')
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i]);
}

for (const items of listItems) {
  console.log(items);
}

// spread operator
[...listItems].forEach(item => console.log(item));

// for any iterable
Array.from(listItems).forEach(item => console.log(item));





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
