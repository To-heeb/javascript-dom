import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
`;

const data = ['Earth', 'Fire', 'Water', 'Air'];

const fragment = document.createDocumentFragment();

data.forEach(name => {
  const li = document.createElement('li');
  li.innerText = name;
  fragment.append(li);
})
console.dir(fragment)

app.append(fragment)
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

// nodeName
console.log(document.body.nodeType)
console.log(document.nodeType)

console.log(document.nodeName)