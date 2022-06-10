import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<form>
  <label>
    Sign-up Email
    <input type="email">
  </label>
  <label>
    I agree to the terms
    <input type="checkbox">
  </label>
</form>
`;

const form = document.querySelector('form');
const email = document.querySelector('input[type=email]');
const checkbox = document.querySelector('input[type=checkbox]');

function handleSubmit(event) {
  //console.log(event);
  if (!checkbox.checked) {
    event.preventDefault();
    // has NOT agreed
    console.log("I am not submitting.....");
    console.log(event.defaultPrevented);
    return;
  }
  console.log("Submitted", email.value);
}

form.addEventListener('submit', handleSubmit);

// example to demonstrate no checking
// checkbox.addEventListener('click', event => {
//   event.preventDefault();
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
