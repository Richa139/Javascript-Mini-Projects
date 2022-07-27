let addtobutton=document.getElementById('addToDo');
let inputfield=document.getElementById('inputField');
let todoContainer=document.getElementById('form');

addtobutton.addEventListener('click',function(){
  
var paragraph=document.createElement('li');
paragraph.classList.add('paragraph-styling');
  
paragraph.innerText=inputfield.value;
  
todoContainer.appendChild(paragraph);

paragraph.addEventListener('click',function(){
 paragraph.style.textDecoration="line-through";
})

paragraph.addEventListener('dblclick',function(){
    todoContainer.removeChild(paragraph);
   })
})
