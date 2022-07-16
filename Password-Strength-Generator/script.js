var pass=document.getElementById('password');
var mesg=document.getElementById('message');
var strength=document.getElementById('res');
pass.addEventListener('input',()=>{
  if(pass.value.length>0){
      mesg.style.display='block';
  }
  else{
      mesg.style.display='none';
  }
  if(pass.value.length>3 && pass.value.length<=6){
     strength.innerHTML='Medium';
     pass.style.borderColor='brown';
     mesg.style.color='brown';
  }

  else if(pass.value.length>6){
      strength.innerHTML='Strong';
     pass.style.borderColor='orange';
      mesg.style.color='orange';
  }

  else{
      strength.innerHTML='Weak';
      pass.style.borderColor='green';
      mesg.style.color='green';

  }
});