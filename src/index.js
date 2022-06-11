import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<form method="post" name="example">
  <input type='text' name='myInput' value="Hello">
</form>
`;

const form = document.forms.example;
const input = form.myInput;

// 1. Properties that are  useful to know
console.dir(input);
// set
input.value = 'Goodbye';
//input.readOnly = true;
//input.disabled = true;
// get
console.log(input.value);

// 2. Events
// other events: cut, copy, paste
input.addEventListener('focus', () => console.log('Focus'))
input.addEventListener('blur', () => console.log('Blur'))
input.addEventListener('input', () => console.log('Input'))
input.addEventListener('change', () => console.log('Change'))
input.addEventListener('cut', (event) => {
  event.preventDefault();
  console.log('Can\'t Cut')
})
input.addEventListener('copy', (event) => {
  event.preventDefault();
  console.log("Can't Copy")
})
input.addEventListener('paste', (event) => {
  event.preventDefault();
  console.log("Can't Paste")
})

// 3. Methods
// focus an input
input.focus()
setTimeout(() => input.blur(), 3000);

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
