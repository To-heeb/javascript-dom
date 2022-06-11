import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<form method="post" name="example">
  <select name="drink">
    <option value="">Selct Your Drink...</option>
    <option value="lemonade" selected>Lemonade</option>
    <option value="cola">Cola</option>
    <option value="water">Water</option>
  </select>
</form>
`;

const form = document.forms.example;
const select = form.elements.drink;

// 1. Selected value
select.value = "water";
console.log(select.value)

// 2. Selected Index
const id = 2;
select.selectedIndex = id;
console.log(select.selectedIndex)

// 3. Selected DOM Element
console.log(select.options[id])

// 4. Events
select.addEventListener("change", () => {
  console.log(select.value)
  console.log(select.selectedIndex)
})

// 5. Add new <option>
const option = document.createElement("option");
option.value = 'milk';
option.text = "Milk";
select.add(option, 1)



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
