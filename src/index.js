import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<button type="button" class="one two">
  Click Me!
</button>
`;

const button = document.querySelector('button');

//Old way: Set
button.className += ' three';

// Old way: Get
console.dir(button.className.split(' '));

// New way: Classlist
// Add
button.classList.add('four')

// Remove
button.classList.remove('one')

// Toggle
button.classList.toggle('five')
setTimeout(() => button.classList.toggle('five'), 2500)

// Replace
button.classList.replace('two', 'six')



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
