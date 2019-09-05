function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

vh = window.innerHeight / 100;
vw = window.innerWidth / 100;

containerDiv = document.createElement("div");
if(detectmob())
	containerDiv.style.width = 90 * vw + 'px';
else
	containerDiv.style.width = 30 * vw + 'px';
containerDiv.style.height = 30 * vh + 'px';
containerDiv.style.padding = "10%";
containerDiv.style.backgroundColor = "white";

warnText = document.createElement("p");
warnText.textContent = "This site uses cookies; we're required to ask if that's alright";
warnText.style.textAlign = "center";
warnText.style.marginBottom = "10%";

agreeButton = document.createElement("button");
agreeButton.onclick = function(){warnDiv.parentElement.removeChild(warnDiv)};
agreeButton.textContent = "Okay";
agreeButton.style.float = "left";
agreeButton.style.backgroundColor = "none";
agreeButton.style.border = "1px solid black";
agreeButton.style.padding = "5%";
agreeButton.style.borderRadius = "15px";
agreeButton.style.width = "35%";

disagreeButton = document.createElement("button");
disagreeButton.onclick = function(){window.location.replace("https://google.com")};
disagreeButton.textContent = "Not Okay";
disagreeButton.style.float = "right";
disagreeButton.style.backgroundColor = "none";
disagreeButton.style.border = "1px solid black";
disagreeButton.style.padding = "5%";
disagreeButton.style.borderRadius = "15px";
disagreeButton.style.width = "35%";

warnDiv = document.createElement("div")
warnDiv.id = "warnDiv";
warnDiv.style.background = "rgba(0,0,0,0.7)";
if(detectmob())
	warnDiv.style.padding = (35*vh+'px ') + (5*vw+'px');
else
	warnDiv.style.padding = (35*vh+'px ') + (35*vw+'px');
warnDiv.style.position = "fixed";
warnDiv.style.height = "100vh";
warnDiv.style.width = "100vw";
warnDiv.style.top = "0";
warnDiv.style.zIndex = "1000";



warnDiv.appendChild(containerDiv);
containerDiv.appendChild(warnText);
containerDiv.appendChild(agreeButton);
containerDiv.appendChild(disagreeButton);
document.children[0].children[1].appendChild(warnDiv)