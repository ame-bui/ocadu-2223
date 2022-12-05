var canvas;
var bookCanvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.addClass('myCanvas');
    canvas.position(0,0);
}

function draw(){
    if(mouseIsPressed){
        stroke(255);
        line(pmouseX, pmouseY, mouseX, mouseY);
        canvas.style('z-index','100');

    }
}