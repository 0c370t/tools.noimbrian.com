var animationElement;
var animationCanvas;
var t = 0;
var start = Date.now();
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
		t += 1;
		window.requestAnimationFrame(renderAnimation) 
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
  return "rgba("+r+","+g+","+b+",1)";
}
function renderAnimation(){
my_t = t;
  animationElement.width += 0;
  for(i=0; i<255; i++){
    b=(my_t)+(i*5); // Rotational Speed + Some Magic Value
    red=Math.abs(S(my_t)*200)%250;
    gre=(255-i);
    blu=i;
    animationCanvas.fillStyle=rgb(red,gre,blu);
    xPos = 500+Math.cos(b)*i*2;
    yPos = ((1.5*i)*399%600-150)*2;
    animationCanvas.fillRect(xPos,yPos,15,15);
  }
	
}
animate();