import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<form method="post" name="example">
  <div class="container">
    <label>
      Accept Marketing
      <input type='checkbox' name='marketing'>  
    </label>
  </div>
</form>
`;

const form = document.forms.example;
const checkbox = form.elements.marketing;

// 1. Properties that are useful
console.dir(checkbox);
checkbox.checked = true;
// set
checkbox.checked = true;
// get
console.log(checkbox.checked);

// 2. Events
checkbox.addEventListener('change', () => {
  console.log(checkbox.checked)
})

// 3. Method 
checkbox.select()



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
