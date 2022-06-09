import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<button type="button">
  Click Me!
</button>
`;

const button = document.querySelector('button');

console.dir(button);

// Avoid, doesn't allow multiple event
button.onclick = function () {
  console.log(1)
}

function handleClick(event) {
  console.log(this, event.target);
}
button.addEventListener('click', handleClick)

button.addEventListener('dblclick', (event) => {
  console.log(this, event.target, "Double-Click")
})
// button.addEventListener('click', () => {
//   console.log(3);
// })



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
