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

function handleClick(event) {
  console.log(event.target);
  button.removeEventListener('click', handleClick)
}

button.addEventListener('click', handleClick)

setTimeout(() => {
  button.removeEventListener('click', handleClick)
}, 5000)

// Make and event handlers work once
//button.addEventListener('dblclick', () => { console.log('Double-Click!') }, { once: true })



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
