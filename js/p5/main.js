
document.ontouchstart = function(e){ 
    e.preventDefault(); 
}


var CWidth = $(document).width();;
var CHeight = 600;
var partNum = 50;
var posParts = [partNum];
var sizParts = [partNum];
var velParts =[partNum];



function setup(){
	var myCanvas = createCanvas(CWidth,CHeight);
	 myCanvas.parent('myContainer');
	for(var i =0;i<partNum;i++){
		posParts[i] = createVector(random(0,width),random(0,height));
		velParts[i] = createVector(random(-1,1),random(-1,1));
		sizParts[i] = 10;
	}
}

function draw(){
	background(255,255,0);
	update();
	var sizeX = 10;
	var sizeY = 10;
	for(var i =0;i<partNum;i++){
		
		for(var j =0;j<partNum;j++){
			sizeX = 10;
			sizeY = 10;
			if(dist(posParts[i].x,posParts[i].y,mouseX, mouseY) <= 150){
				stroke(0);
				line(posParts[i].x,posParts[i].y,mouseX, mouseY);
				sizeX = 20;
				sizeY = 20;
			}
			if(dist(posParts[i].x,posParts[i].y,touchX, touchY) <= 150){
				stroke(0);
				line(posParts[i].x,posParts[i].y,touchX, touchY);
				sizeX = 20;
				sizeY = 20;
			}
		}
		noStroke();
		fill(0);
		ellipse(posParts[i].x, posParts[i].y, sizeX ,sizeY );
	}
	
}

function update(){

	for(var i =0;i<partNum;i++){
		posParts[i].x = posParts[i].x + velParts[i].x;
		posParts[i].y = posParts[i].y + velParts[i].y;

		if(posParts[i].x<=0 ){
			posParts[i].x = width;
		}else if(posParts[i].x>=width){
			posParts[i].x = 0;
		}

		if(posParts[i].y<=0 ){
			posParts[i].y = height;
		}else if(posParts[i].y>=height){
			posParts[i].y = 0;
		}
	}


}



