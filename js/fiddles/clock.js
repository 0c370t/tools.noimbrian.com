clockElement = document.getElementById('clock');

if(clockElement.tagName != "CANVAS"){
	errorMessage = document.createElement('p');
	errorMessage.textContent = "Element ID \"clockElement\" must be a canvas!";
	errorMessage.style.color = "red";
	clockElement.parentElement.replaceChild(errorMessage,clockElement);
}

clockSize = Math.floor(clockElement.parentElement.clientWidth * 0.8);
clockElement.style.height = clockSize + "px";
clockElement.style.width = clockSize + "px";
var clockCanvas = clockElement.getContext("2d");
clockCanvas.canvas.width = clockSize;
clockCanvas.canvas.height = clockSize;
clockCanvas.strokeStyle = "#FFF";
clockCanvas.fillStyle = "#FFF";
clockCanvas.textAlign = "center";
var nums = ["","","III","","","VI","","","IX","","","XII"]
var d = new Date();
var clockTheta = 60;
function drawClock(){
	d = new Date();
	clockCanvas.clearRect(0,0,clockSize,clockSize);
	clockCanvas.beginPath();
	clockCanvas.lineWidth = 2;
	clockCanvas.arc(clockSize/2,clockSize/2,clockSize/2.5,0,Math.PI*2);
	clockCanvas.stroke();
	clockCanvas.beginPath();
	clockCanvas.arc(clockSize/2,clockSize/2,clockSize/50,0,Math.PI*2);
	clockCanvas.fill();
	clockCanvas.font = clockSize/15 + "px IBM Plex Serif";
	clockCanvas.lineWidth = 1;
	for(i=0;i<12;i++){
		pos = getHandPos((i+1)*clockTheta/12,1);
		clockCanvas.fillText(nums[i],pos[0],pos[1] + clockSize/40);
	}
	for(var k=0;k<clockTheta;k++){
	pos = getHandPos(k,1.1)
    clockCanvas.fillRect(pos[0]-2,pos[1]-2,4,4);
	}
	drawHourHand();
	drawMinuteHand();
	drawSecondHand();
}

function getHandPos(hour, clockSizeMod){
	if(typeof(hour) != "number" && typeof(hour) != "string"){
		console.error("Incorrect Parameter Type \"" + typeof(hour) + "\" given to getHousePos()");
	}
	if(typeof(hour) == "string")
		try{
			hour = Integer.parseInt(hour);
		} catch(e){
			console.error("Incorrect string format given to getHousePos(), requires integer\n" + hour);
		}
	xMod = Math.floor(Math.sin(((hour)%clockTheta)/(clockTheta*0.5)*Math.PI)*(clockSize/3)*clockSizeMod);
	yMod = Math.floor(Math.sin(((hour+(clockTheta*0.75))%clockTheta)/(clockTheta*0.5)*Math.PI)*(clockSize/3)*clockSizeMod);
	return [clockSize/2+xMod,clockSize/2+yMod];
}
function drawHourHand(){
	endPos = getHandPos((d.getHours())*5,1.2);
	clockCanvas.lineWidth = 5;
	clockCanvas.beginPath();
	clockCanvas.moveTo(clockSize/2,clockSize/2);
	clockCanvas.lineTo(endPos[0],endPos[1]);
	clockCanvas.stroke();
}
function drawMinuteHand(){
	endPos = getHandPos(d.getMinutes()%60,1.2);
	clockCanvas.lineWidth = 2;
	clockCanvas.beginPath();
	clockCanvas.moveTo(clockSize/2,clockSize/2);
	clockCanvas.lineTo(endPos[0],endPos[1]);
	clockCanvas.stroke();
}
function drawSecondHand(){
	endPos = getHandPos(d.getSeconds()%60,1.2);
	clockCanvas.lineWidth = 1;
	clockCanvas.beginPath();
	clockCanvas.moveTo(clockSize/2,clockSize/2);
	clockCanvas.lineTo(endPos[0],endPos[1]);
	clockCanvas.stroke();
}

setInterval(drawClock, 10);