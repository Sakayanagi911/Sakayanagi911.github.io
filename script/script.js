// open close nav
function openNav() {
	document.getElementById("sidebar").style.width = "100%";
}

function closeNav() {
 	document.getElementById("sidebar").style.width = "0%";
}

// anchor
function scrollToTargetAdjusted(id) {
    var element = document.getElementById(id);
    var headerOffset = 100;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}