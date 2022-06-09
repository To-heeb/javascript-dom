import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<button type="button">
  Click Me!
</button>
`;

// <button style="padding: 25px; margin: 0;">
const button = document.querySelector('button');
console.dir(button.style)

// cssText
button.style.cssText = 'padding: 25px; margin: 10px 0; font-size: 20px;'

// driect property access
button.style.fontSize = '22px';
button.style.marginTop = '1px';

console.log(button.style.fontSize);




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
