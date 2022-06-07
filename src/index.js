import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
`;

const div = document.createElement('div');
div.innerText = 'I am a message!';

app.append(div);

// new way
setTimeout(() => div.remove(), 2500);

// oldway
setTimeout(() => div.parentNode.removeChild(div), 2500)




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
