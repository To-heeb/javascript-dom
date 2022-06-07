import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<ul>
  <li>1</li>
</ul>
`;

const ul = app.querySelector('ul');
ul.insertAdjacentHTML('beforebegin', '<p>Before</p>');
ul.insertAdjacentHTML('afterbegin', '<li>First</li>');
ul.insertAdjacentHTML('beforeend', '<li>Last</li>');
ul.insertAdjacentHTML('afterend', '<p>After</p>');

console.log(app)


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
