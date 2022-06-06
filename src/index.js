import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
`;

const h1 = document.createElement('h1');
h1.innerText = 'Ultimate Courses';
h1.innerText = 'Learning JS DOM';
h1.style.display = 'none';
app.append(h1)

console.log(app.innerHTML)
console.log(app.innerText)
console.log(app.textContent)





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