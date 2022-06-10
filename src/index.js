import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<div style="height: 1000px"></div>
`;

document.addEventListener('keydown', event => {
  //console.log(event.key, event.code);
  switch (event.key) {
    case "ArrowUp": {
      console.log("Up")
      event.preventDefault()
      break;
    }

    case "ArrowDown": {
      console.log("Down")
      event.preventDefault()
    }
  }
})
// Keyup is prefered to Keydown due to performance considerations.
document.addEventListener("keydown", event => { console.log(event.key, event.code) })
document.addEventListener("keyup", event => { console.log(event.key, event.code) })



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
