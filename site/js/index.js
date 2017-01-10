//window.onscroll = function() {chVisibility()};
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 150) {
			$("#stickyNavBar").fadeIn(300);
			$("#scrollToTop").fadeIn(200);
		}
		else {
			$("#stickyNavBar").fadeOut(400);
		 	$("#scrollToTop").fadeOut(200);
		}
	});

	$('#scrollToTop').click(function(event){
		event.preventDefault();
		var win = $('html, body');
		$(win).stop().animate({scrollTop : $(win).offset().top},300);
		// return false;
	});
	// $("#toTop").click(function(event) {
	// 	var target = $( $(this).attr('href') );

 //    if( target.length ) {
 //        event.preventDefault();
 //        $('html, body').animate({
 //            scrollTop: target.offset().top
 //        }, 500);
 //    }
	// });
});
// function chVisibility(el) {
	//console.log(document.body.scrollTop);
	// if ($(document).scrollTop() > 150 || document.documentElement.scrollTop > 150) {
		// var navBar = document.getElementById("stickyNavBar");
		// navBar.classList.add("showStickyNavBar");
		// $("#stickyNavBar").fadeIn(300);
		// $("#toTop").fadeIn(200);
		// navBar.style.transition = "visibility 1s";
		// navBar.style.display = "block";
	// }
	// else {
	// 	document.getElementById("stickyNavBar").classList.remove("showStickyNavBar");
	// 	$("#stickyNavBar").fadeOut(400);
	// 	$("#toTop").fadeOut(200);
	// }

	// /*################### Move To Top Button ################*/
 //    var ael = document.getElementById("toTop");
 //    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
 //    	// ael.style.visibility = "visible";
 //    	// animToTop(ael);
 //    	ael.classList.add("animtoTop");
 //    }
 //    else {
 //    	// ael.style.visibility = "hidden";
 //    	ael.classList.remove("animtoTop");
 //    }

// }
// function animToTop(el) {
// 	var id = setInterval(frame,2);
// 	var op = 0;
// 	function frame() {
// 		if (op == 10) {
// 			clearInterval(id);
// 		}
// 		else {
// 			el.style.opacity = op * 0.1;
// 			op ++;  
// 		}
// 	}
// }