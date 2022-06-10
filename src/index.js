import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<form method="post" name="order">
  <lable>
    Your name
    <input type="text" name="fullname">
  </label>
</form>
`;

const form = document.forms.order;

const fullname = form.elements.fullname;

function handleInput(event) {
  // access the value
  console.log(event.target.value)

  // access the form
  console.log(event.target.form)
}

fullname.addEventListener('change', handleInput)


// Using destructors to access objects properties
//const { fullname, email } = form.elements;

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
