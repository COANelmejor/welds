$(document).ready(fun);

var contador
function fun(){
	$(window).scroll(function(){
 	if (contador == 0) {
		$('nav').animate({
 			left: '-100%'
 		});
 	contador =1;
 		}
 	});
};