// DOM - Documnet Object Model

// 4 pillars of DOM
// - Selection of an Element
// - Changing HTML,CSS AND EVENT LISTENER

var h1 = document.querySelectorAll('h1');

h1.forEach(function(elem,idx){
    elem.innerHTML="changed"+idx
    elem.style.backgroundColor="pink";
})
