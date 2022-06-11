import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<form method="post" name="example">
  <div class="container">
    <label>
      Blue
      <input type='radio' name='color' value="blue" checked>  
    </label>
    <label>
      Red
      <input type='radio' name='color' value="red">  
    </label>
    <label>
      Green
      <input type='radio' name='color' value="green">  
    </label>
  </div>
</form>
`;

const form = document.forms.example;
console.dir(form.elements)
const radios = [...form.elements.color];

// 1.Properties that are useful
radios.forEach(radio => {
  console.log(radio.value);
  console.log(radio.checked);
})

// 2. Events
const container = form.querySelector('.container');
container.addEventListener('change', () => {
  // Old way
  // const checked = radios.find(radio => radio.checked).value;
  // console.log(checked);

  // New way
  console.log(form.elements.color.value)
})

// 3. Methods
radios[2].select();
console.log(radios);







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
