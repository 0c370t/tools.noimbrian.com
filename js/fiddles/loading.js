var animationElement;
var animationCanvas;
var animationTime = 0;
function T(x){return Math.floor(Math.tan(x)*100)/100;}
function S(x){return Math.floor(Math.sin(x)*100)/100;}
function C(x){return Math.floor(Math.sin(x)*100)/100;}
function animate(){
  animationElement = document.getElementById("animation");
  animationCanvas = animationElement.getContext("2d");
	animationSize = Math.floor(animationElement.parentElement.clientWidth * 0.8)
	animationElement.style.width = animationSize + "px";
	animationElement.style.height = animationSize + "px";
	animationCanvas.canvas.width = 1000;
	animationCanvas.canvas.height = 1000;
  let timer = setInterval(function(){
		animationTime += 1;
		window.requestAnimationFrame(renderAnimation);
  }, (1/60)*1000);
}
function rgba(r,g,b,a){
  try{
  r = Math.floor(r);
  } catch(e){} try{
  g = Math.floor(g);
  } catch(e){} try{
  b = Math.floor(b);
  } catch(e){}
  return "rgba("+r+","+g+","+b+","+a+")";
}
function rgb(r,g,b){
  try{
  r = Math.floor(r);
  } catch(e){} try{
  g = Math.floor(g);
  } catch(e){} try{
  b = Math.floor(b);
  } catch(e){}
  return "rgb("+r+","+g+","+b+")";
}
function renderAnimation(){
  animationElement.width += 0;
  for(i=0; i<255; i++){
    b=(animationTime/50)+(i*5); // Rotational Speed + Some Magic Value
    //red=Math.abs((((-1*Math.abs(animationTime-250))+250)%500));
    red=Math.sin(animationTime/100)*125 + 125;
    gre=(i);
    blu=Math.cos(animationTime/100)*125 + 125;
    animationCanvas.fillStyle=rgb(red,gre,blu);
    xPos = 500+Math.cos(b)*i*2;
    yPos = ((1.5*i)*399%600-150)*2;
    animationCanvas.fillRect(xPos,yPos,15,15);
  }
}
animate();