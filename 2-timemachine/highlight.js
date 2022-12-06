var canvas;
var bookCanvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.addClass('myCanvas');
    canvas.position(0,0);
}

function draw(){
    if(mouseIsPressed){
        stroke(random(0,255),random(0,255),245);
        strokeWeight(2);
        line(pmouseX, pmouseY, mouseX, mouseY);
        canvas.style('z-index','100');
    }
}