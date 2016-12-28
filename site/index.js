//window.onscroll = function() {chVisibility()};
function chVisibility(el) {
	//console.log(document.body.scrollTop);
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		var navBar = document.getElementById("stickyNavBar");
		navBar.classList.add("showStickyNavBar");
		// navBar.style.transition = "visibility 1s";
		// navBar.style.display = "block";
	}
	else {
		document.getElementById("stickyNavBar").classList.remove("showStickyNavBar");
	}

	/*################### Move To Top Button ################*/
    var ael = document.getElementById("toTop");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    	// ael.style.visibility = "visible";
    	// animToTop(ael);
    	ael.classList.add("animtoTop");
    }
    else {
    	// ael.style.visibility = "hidden";
    	ael.classList.remove("animtoTop");
    }

}
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