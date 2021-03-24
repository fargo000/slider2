$(document).ready(function(){
	"use strict";
	$(".icon").on("click",function(){
		$("nav ul").toggleClass("mostrar");
	});
});


$(document).ready(function(){
	"use strict";
	$(".menu2").on("click", function(){
		$(".segundo").toggleClass("ver-2");
	});
});


$(document).ready(function(){
	"use strict";
	$(".menu3").on("click", function(){
		$(".tercero").toggleClass("ver-3");
	});
});

if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }
 //Llamar boton//

 var mybutton = document.getElementById("bttButton");
 window.onscroll = function() {scrollFunction();};

 function scrollFunction(){
     if(document.body.scrollTop > 20 || document.documentElement.scroll > 20 ){
         mybutton.style.display = "block";
     }else{
         mybutton.style.display = "none";
     }
 }
 var mybutton = document.getElementsById("bttButton");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scroll > 20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

//Lamar boton//

var mybutton = document.getElementsById("bttButton");
window.onscroll = function() {scrollFunction();};

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scroll > 20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}
