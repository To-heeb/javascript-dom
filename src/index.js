import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<form method="post" name="order">
  <lable>
    Your name
    <input type="text" name="fullname">
  </label>
  <lable>
    Which pizza do you like?
    <select name="pizza">
      <option value="pepperoni">Pepperoni</option>
      <option value="meaty">Meaty</option>
      <option value="cheesy">Cheesy</option>
    </select>
  </label>
  <div>
    <label>
        Small
        <input type="radio" name="size" value="small" checked>
    </label>
    <label>
        Medium
        <input type="radio" name="size" value="medium">
    </label>
    <label>
        Large
        <input type="radio" name="size" value="large">
    </label>
  </div>
  <label>
    Quantity
    <input type="number" name="quantity" value="1">
  <label>
  <button type="submit">
    Submit
  </button>
</form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  // query string
  // Content-Type = application/x-www-form-urlencoded
  // fullname=Toheeb+Oyekola&pizza=pepperoni&size=large&quantity=2
  const formData = new FormData(event.target);

  // methode 1 for querystring creation
  // const data = [...formData.entries()]
  // const asString = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&');

  // methode 2 for querystring creation
  const asString = new URLSearchParams(formData).toString();
  console.log(asString);

  // json
  const asJson = JSON.stringify(Object.fromEntries(formData));
  console.log(asJson);
}

form.addEventListener('submit', handleSubmit);


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
