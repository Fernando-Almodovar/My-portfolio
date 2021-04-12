// ============ Barra Navegación =============== 

jQuery("document").ready(function($){

    let menuBtn = $(".menu-icon"),
        menu = $(".navigation ul");

    menuBtn.click(function() {

        if( menu.hasClass("show") ) {

          menu.removeClass("show");
        }
          else {
        
          menu.addClass("show");
        }
     
    })

});

// ============ Fin Barra Navegación ============
// ============ Formulario ====================

let inputs = document.getElementsByClassName("form-input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function(){
    if(this.value.length>=1) { 
      this.nextElementSibling.classList.add("fijar");
     } else {
      this.nextElementSibling.classList.remove("fijar");
     }
  });
  
}