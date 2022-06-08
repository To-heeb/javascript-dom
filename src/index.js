import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<div id='father'>
  <div class='item'></div>
</div>
`;

const item = document.querySelector('.item');
console.log(item.parentNode);
console.log(item.parentElement.parentElement)
console.log(item.closest('#app'));
console.log(item.closest('#father'));


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
