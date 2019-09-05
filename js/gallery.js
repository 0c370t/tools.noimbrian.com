// Function Declaration

function toggleLarge(e){
	current = e.target;
	if(current.getAttribute('isLarge') == '0'){
		current.parentElement.style.height = getComputedStyle(current.parentElement).height; // Keeps flow from flowing unnecessarily
		current.setAttribute('isLarge','1') // State Toggle
		if(window.innerWidth > window.innerHeight){ // If Landscape Device
			current.style.height = "60vh"; // Height of element
			current.style.width = "auto";  // Width of element
			current.style.padding = "20vh " + ((window.innerWidth - window.innerHeight * 60/100)/2) + "px";
		}else{
			current.style.padding = ((window.innerHeight - window.innerWidth * 80/100)/2)+ "px 10vw";
			current.style.height = "auto";
			current.style.width = "80vw";
		}
		current.style.backgroundColor = "rgba(0,0,0,0.7)";
		current.style.top = "0";
		current.style.left = "0";
		current.style.position = "fixed";
		current.style.boxSizing = "content-box";
		current.style.zIndex = "10";
	}
	else{
		current.setAttribute('isLarge','0');
		current.removeAttribute('style');
		current.parentElement.style.removeProperty('height');
	}
}

// Initialization Stuff

x = document.getElementsByClassName("gallery");

for(var i=0; i<x.length; i++){
	x[i].setAttribute("onclick","toggleLarge(event)");
	x[i].setAttribute('isLarge','0');
	x[i].setAttribute('title','Click to enlarge picture');
}