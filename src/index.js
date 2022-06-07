import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<div>
  Replace me!
</div>
`;

const div = app.querySelector('div');
const newDiv = document.createElement('div');
newDiv.innerHTML = 'I have been replaced';

// new way
div.replaceWith(newDiv);

// old way
const anotherDiv = document.createElement('div');
anotherDiv.innerHTML = 'I replace all';

setTimeout(() => {
  newDiv.parentNode.replaceChild(anotherDiv, newDiv);
}, 2000)

console.log(div)

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
