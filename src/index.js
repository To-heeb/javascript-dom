import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');
const i = document.createElement('i');
const b = document.createElement('b');



div.append(span)
div.prepend(p)
span.after(i)
//span.before(i)

// old way using insertBefore
//i.parentNode.insertBefore(b, i)

// old way of insertAfter
i.parentNode.insertBefore(b, i)
console.log(div);
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

// nodeName
console.log(document.body.nodeType)
console.log(document.nodeType)

console.log(document.nodeName)