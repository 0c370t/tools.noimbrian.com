// Code taken from Dwitter.net with the sole purpose of learning
function createStats() {
	var stats = new Stats();
	stats.showPanel(0);
	stats.dom.setAttribute('id', 'stats');
	document.body.appendChild(stats.dom);
	return stats;
}

var stats = createStats();
setStatsVisibility(false);

var c = document.querySelector("#c");
c.width = 1920;
c.height = 1080;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;
function R(r,g,b,a) {
	a = a === undefined ? 1 : a;
	return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")";
	};
var x = c.getContext("2d");
var time = 0;
var frame = 0;
function u(t) {
	 c.width|=V=960,H=560
for(j=99;j--;x.beginPath())
	for(i=5;i--;x.stroke())
		Z=C(a=i*1.57+t+5*S(t+j/99))+8,x.lineTo(V+(S(a))/Z*V,H+(6-(j/8))/Z*H)
	}
function loop() {
	stats = stats || createStats();

	if (playing){
		requestAnimationFrame(loop);
	}
	time = frame/60;
	if(time * 60 | 0 == frame - 1){
		time += 0.000001;
	}
	frame++;

	try {
		stats.begin();
		u(time);
		stats.end();
		displayError("");
	} catch (e) {
		stats.end();
		displayError(e);
		throw e;
	}
}
if(autoplay) {
		loop();
}

function reset(){
	c = document.querySelector("#c");
	c.width = 1920;
	c.height = 1080;
	S = Math.sin;
	C = Math.cos;
	T = Math.tan;
	R = function(r,g,b,a) {
		a = a === undefined ? 1 : a;
		return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")";
	};
	x = c.getContext("2d");
	time = 0;
	frame = 0;
}
