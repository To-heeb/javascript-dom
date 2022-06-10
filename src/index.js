import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
<div class="one">
  <div class="two">
    <button type="button" class="three">
      Click Me
    </button>
  </div>
</div>
`;

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

function handleClick(event) {
  event.stopImmediatePropagation()
  //event.stopPropagation();
  console.log(event.target)
}
one.addEventListener('click', handleClick)
two.addEventListener('click', handleClick)
three.addEventListener('click', handleClick)

three.addEventListener('click', event => console.log(event), { capture: true })




// Phases of event propagation
// 1- Capturing Phase :- The event goes down to the element.
// 2- Targetting Phase :- The event reaches the target element.
// 3- Bubbling Phase :- The event is bubbles from the target element.

// DOM doesn't deny target but gives the listerner it's right. It also does not prevent immediate propagation to other event-handlers.


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
