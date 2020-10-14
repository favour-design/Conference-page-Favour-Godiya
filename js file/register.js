document.getElementById("myform").onsubmit=purchaseGoods;

function purchaseGoods(e) {
  e.preventDefault();
console.log('it works')
  var name, mail, option, message, button;
  name = document.querySelector ('.box').value;
  mail = document.querySelector ('.box').value;
  option = document.querySelector ('.box').value;
  message = document.querySelector ('.boxA').value;
  button = document.querySelector ('.button');
  button.addEventListener("click", function(){
    if (name ==! "" || mail ==! "" || option ==! "" || message ==! ""){
      alert("Your Purchase is Successfull! Thank You.");
    }
  }) 
}