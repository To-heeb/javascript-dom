import '../assets/css/style.css';

const app = document.getElementById('app');
// app.innerHTML = `
// <h1>JavaScript DOM!!</h1>
// `;

// Using document.createElement
function createInputDOM({ label, type = 'text' }) {
  const labelEl = document.createElement('label');
  const inputEl = document.createElement('input');

  inputEl.type = type
  labelEl.innerText = label;
  labelEl.append(inputEl)

  return labelEl;
}

const inputFromDOM = createInputDOM({ label: 'Name' })

console.log(inputFromDOM)
app.append(inputFromDOM)

// Using string templates
function createInputTemplate({ label, type = 'text' }) {
  return `
    <label>
      ${label}
      <input type='${type}'>
    <label>
  `
}

const inputFromTemplate = createInputTemplate({ label: 'Email', type: 'email' })

app.innerHTML += inputFromTemplate




// <html>
console.log(document)
console.dir(document)
console.dir(document.documentElement)

// <head>
console.dir(document.head)

// <body>
console.dir(document.body)

// retrieve the contructor name from
console.log(document.body.constructor.name)

// looking at the prototype chain
console.log(document.body instanceof HTMLBodyElement)
console.log(document.body instanceof HTMLElement)
console.log(document.body instanceof Element)
console.log(document.body instanceof Node)
console.log(document.body instanceof EventTarget)
console.log(document.body instanceof Object)


// Onload of DOM content
/*document.addEventListener('DOMContentLoaded', () => {
  alert('DOMContentLoaded')
})*/

// On load of page
//window.addEventListener('load', () => { alert('Load') })

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