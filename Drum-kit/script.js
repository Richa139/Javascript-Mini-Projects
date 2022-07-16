for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerhtml=this.innerHTML;
      makesoundbykey(buttonInnerhtml);
    });
  }
    document.addEventListener("keypress",function(event){
      
      makesoundbykey(event.key);
    });

    function makesoundbykey(key){
      switch(key){
        case "w":
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
 
          case "a":
          var tom2=new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

          case "s":
          var tom3=new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

          case "d":
          var tom4=new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
      
          case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k":
          var crash=new Audio("sounds/crash.mp3");
          crash.play();
          break;

          case "l":
          var kick=new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;

          default:
        }
    }




















// var audio = new Audio("sounds/crash.mp3");
//      audio.play();

// document.querySelectorAll("button").addEventListener("click",handleclick);

// function handleclick(){
//     alert("i got clicked"); 
// }
// function add(num1 , num2){
//     return num1+num2;
// }
// function sub(num1, num2){
//     return num1-num2;
// }
// function cal(num1,num2,operator){
//     return operator(num1,num2);
// }
// cal(2,3,add);
// higher order function
//new


// javascript objects
// var richa={
//   name: richi,
//   age: 20
// };
// constructor function
// function house(home,cn){
//   this.home=home;
//   this.cn=cn;
// }
// var house1=new house[22,56];