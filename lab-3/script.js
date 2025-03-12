var maxSteps = 6;

function setup(){
	createCanvas(windowWidth,windowHeight);
    ellipseMode(CENTER);
    colorMode(HSL);
    angleMode(DEGREES)
    frameRate(0.5);
    // noLoop();

}

function draw(){
    background(20);
    drawGrid(0,0,width,height,1);

}

function drawGrid(x,y,w,h,depth,c){
    // Splitting the width and height of the grid into even cells
    // let split = random([1,2,3,4,5])
    // let w2 = (w / random([1,2,3,4,5]));
	// let h2 = (h / random([1,2,3,4,5]));
    // there is however some bias in this ^
    // because the grid mostly filled in the top left of the canvas

    // Adding another layer of randomness to avoid the problem above
    // The grid then can only choose to either split (split) or not (1)
    // Limitting the chances of the left side to always be split.
    let split = random([2,3,4,5]);
	let w2 = (w / random([1,split]));
	let h2 = (h / random([1,split]));
    
    
    for(let x1=0; x1 < w; x1 += w2){
        for(let y1=0; y1 < h; y1 += h2){
            if(depth < maxSteps){
                // console.trace();

                drawGrid(x+x1, y+y1, w2,h2, ++depth, int(random(150,250)));
                
                // For more fun stuffs
                // push();
                // translate(50,100);
                // drawGrid(x+x1+200, y+y1+100, w2,h2, ++depth, int(random(10,100)));
                // pop();
            }
            else {
                drawCell(x+x1, y+y1, w2, h2, c);
            }
        }
	}
}

function drawCell(x,y,w,h,c){
    let r = random();
    let cellColor = color(c, random(50,70),60);
    // noStroke();
    // fill(c, random(50,70),60);
    noFill();
    stroke(cellColor);
    rect(x,y,w,h);
    // circle(x,y,w/10);
    if (r <0.5){
        rect(x,y,w,h);
    } else {
        // rect(x,y,w,h);
        // fill(20);
        ellipse(x,y,w,h);
    }
    
}

function mousePressed(){
    saveCanvas(canvas, "recursive-grid", "png");
}










// Grids
//https://gorillasun.de/blog/an-algorithm-for-irregular-grids