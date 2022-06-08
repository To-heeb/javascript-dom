import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<ul id='list'>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
`;

const listItem = document.querySelector('#list li');

// Any DOM Nodes
console.log(listItem.nextSibling);
console.log(listItem.previousSibling);

// Any Element Nodes
console.log(listItem.nextElementSibling)
console.log(listItem.previousElementSibling)



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
