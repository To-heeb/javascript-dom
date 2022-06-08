import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<button type="button">
  CLOSE ME
</button>
`;

const button = document.querySelector('button')
console.log(button)

// SET ATTRIBUTE
button.setAttribute('aria-label', 'Close this modal')

// GET ATTRIBUTE
const value = button.getAttribute('aria-label')
console.log(value)

// .attributes
console.log(button.attributes)




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
