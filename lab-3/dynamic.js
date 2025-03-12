
function setup(){
	createCanvas(windowWidth,windowHeight);
    // ellipseMode(CENTER);
    colorMode(HSL);
    angleMode(DEGREES)
    frameRate(0.5);
    // noLoop();
}

function draw(){
    background(20);


    // Initiate the function.
    drawShapes(2);

    // Returning the array into a new array is not neccessary
    // let shapeArr = drawShapes(2);
    // console.log(shapeArr);
    // console.log(shapeArr[0]);

    // for (let i = 0; i < shapeArr.length; i++){
    //     console.log(shapeArr[i]);
    //     shapeArr[i].drawCell();

    //     // push();
    //     // translate(50,100);
    //     // shapeArr[i].drawCell();
    //     // pop();
    // }   
    // drawGrid(0,0,width,height,1);

}


function drawShapes(n){
    let Shapes =[];
    Shapes[0] = new shapeObject(0,0,windowWidth,windowHeight,0,0);
    // 
    while(Shapes.length > 0){
        console.log(Shapes.length);
        let x = Shapes[Shapes.length -1].x; // Store the last parameter of the top cell
        let y = Shapes[Shapes.length -1].y;
        let w = Shapes[Shapes.length -1].w;
        let h = Shapes[Shapes.length -1].h;
        let step = Shapes[Shapes.length -1].step;

        let split = random([2,3,4,5]); // Split the top cells
        let splitX= random([1,split]);
        let splitY= random([1,split]);

        let w2 = (w / splitX); // Splitting 
        let h2 = (h / splitY);
        
        Shapes[Shapes.length -1].drawCell(); // Draw the top cell
        Shapes.pop(); // Pop it out

        // Create a new cells from the top cells
        if(step < n){
            let c = random(150,250);
            for(let i= splitX-1; i >= 0; i--){
                for(let j = splitY-1; j>= 0; j--){
                    let newX = x + i*w2;
                    let newY = y + j*h2;
                    let obj_shape = new shapeObject(newX, newY, w2,h2, c,step+1);
                    Shapes.push(obj_shape);


                }
            }
         
        }


        
    }

}

// The cell
class shapeObject{
    constructor(x,y,w,h,c,step){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.step = step;
        this.c = c;
    }
    drawCell() {
        let r = random();
        let cellColor = color(this.c, random(50,70),60);
        // noStroke();
        // fill(this.c, random(50,70),60);
        noFill();
        stroke(cellColor);
        rect(this.x,this.y,this.w,this.h);
        // circle(x,y,w/10);
        if (r <0.5){
            rect(this.x,this.y,this.w,this.h);
        } else {
            // rect(this.x,this.y,this.w,this.h);
            // fill(20);
            ellipse(this.x,this.y,this.w,this.h);
        }
    }

    
}

/// Initial iterations  

// function drawShapes(n){
//     let Shapes = [];
//     Shapes[0] = new shapeObject(0,0,windowWidth,windowHeight,0);

//     for( let i = 0; i<n; i++){
//         let split = random([2,3,4,5]);
//         let w2 = (windowWidth / random([1,split]));
//         let h2 = (windowHeight / random([1,split]));

//         for(let x1=0; x1 < windowWidth; x1 += w2){
//             for(let y1=0; y1 < windowHeight; y1 += h2){
//                 let obj_shape = new shapeObject(Shapes[i].x+x1, Shapes[i].y+y1, w2,h2, int(random(150,250)));
//                 Shapes.push(obj_shape);
//             }
//         }

//     }
    
//     console.log(Shapes);
//     return Shapes;
// }

// function drawGrid(x,y,w,h,depth,c){
//     let split = random([2,3,4,5]);
// 	let w2 = (w / random([1,split]));
// 	let h2 = (h / random([1,split]));
    
    
//     for(let x1=0; x1 < w; x1 += w2){
//         for(let y1=0; y1 < h; y1 += h2){
//             if(depth < maxDepth){
//                 drawGrid(x+x1, y+y1, w2,h2, ++depth, int(random(150,250)));
//                 // push();
//                 // translate(50,100);
//                 // drawGrid(x+x1+200, y+y1+200, w2,h2, ++depth, int(random(10,100)));
//                 // pop();
//             }
//             else {
//                 drawCell(x+x1, y+y1, w2, h2, c);
//             }
//         }
// 	}
// }


// function mousePressed(){
//     saveCanvas(canvas, "recursive-grid", "png");
// }






