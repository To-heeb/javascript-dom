import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');

span.innerText = 'Can you clone me?';
div.append(span);

app.append(div);

// cloneNode(false) only clones the top element
const clone = div.cloneNode();

// cloneNode(true) clones all elements and subtrees
const newClone = div.cloneNode(true);

app.append(newClone);

console.log(clone);
console.log(newClone);



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
