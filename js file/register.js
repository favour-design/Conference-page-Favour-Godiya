function purchaseGoods() {
    var name, mail, option, message, button;
    name = document.querySelector ('#inA').value;
    mail = document.querySelector ('#inB').value;
    option = document.querySelector ('#inC').value;
    message = document.querySelector ('#inD').value;
    button = document.querySelector ('.button');

    button.addEventListener("click", function() {
        
    })

    if(name === "" || mail === "" || option ==="" || message === ""){
        Comment("fill in your details");
        return;
    } else{

    }
   
}
