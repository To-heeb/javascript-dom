import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
<h1>JavaScript DOM!!</h1>
`;



// <html>
console.log(document)
console.dir(document.documentElement)

// <head>
console.dir(document.head)

// <body>
console.dir(document.body)

// Onload of DOM content
/*document.addEventListener('DOMContentLoaded', () => {
  alert('DOMContentLoaded')
})*/

// On load of page
//window.addEventListener('load', () => { alert('Load') })