import '../assets/css/style.css';

const app = document.getElementById('app');
const div = document.createElement('div');
const text = document.createTextNode('DOM!')
const comment = document.createComment('No comment')

div.append(comment)
div.append(text)
app.append(div)
console.log(app, div)



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


console.log(document.body.nodeType)
console.log(document.nodeType)

// nodeName form any Node types
console.log(document.body.nodeName)
// tagName for any Element type
console.log(document.body.tagName)