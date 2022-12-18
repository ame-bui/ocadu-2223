

var histLowMid = [];
var histMid =[];
var histHighMid = [];
let ogX = 0;
let originOffset = 0;

var bgcolor = 180;
var sound, ftt, spectrum, amplitude; 

let posX = 0;
let posY = 0;
let treblePosX = 0;
let treblePosY = 0;

var minlowMid = 0;
var maxlowMid = 100;
var my_Speed = 5;

let fft;
var x = 0;


let trebleEnergy;
let sizeTrebleEnergy;
var beatHoldFrames = 15;
var beatThreshold = 0.2; 
var beatCutoff = 0;
var beatDecayRate = 0.98;
var framesSinceLastBeat = 0;
var checkBeat = false;
let bckgr,bg,pg;

let p;
let textArray = [];
let text_item, text_item_index;
let randArray = [];

function preload() {

// sound = loadSound("media/bdrmm - Bedroom - 06 (The Silence).mp3");
// sound = loadSound("media/Dead Man Runnin’.mp3");

sound = loadSound("media/long-season.mp3");
// 
font = loadFont("font/Newsreader-Italic.ttf");
p = loadStrings("text.txt");

}

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    bg = createGraphics(windowWidth, windowHeight);
    pg = createGraphics(windowWidth, windowHeight);
    unitSizeX = width / 100;
    unitSizeY = 310;

    frameRate(25);
    pixelDensity();
    rectMode(CORNERS);
    ellipseMode(CENTER);
    angleMode(DEGREES);
    
    sound.play();
    sound.setVolume(0.5);
    amplitude = new p5.Amplitude();
    amplitude.setInput(sound);
    amplitude.toggleNormalize();
    amplitude.smooth(0.9);


    fft = new p5.FFT();

    ogX = - (height / 2) - 100;
    originOffset = - 100;

    textFont(font);
    textSize(12);
    for(let i = 0; i < p.length; i++){
        textArray.push(...split(p[i], /[\s]+/));
    }
    console.log(textArray);
    


}


function draw(){
    // bg.clear();
    // bckgr.background(bgcolor);
    bg.background(bgcolor);


    spectrum = fft.analyze();
    let level = amplitude.getLevel();
    // console.log(level);
    detectBeat(level);

    // Get energy
    let midEnergy = fft.getEnergy("mid");
    let lowMidEnergy = fft.getEnergy("lowMid");
    let highEnergy = fft.getEnergy("highMid");

    aniSpeed = map(level, 0, 0.2, 1, 4);


    // Mapping energy
    lowMidEnergy = map(lowMidEnergy, 0, 255, 0, 100);

    midEnergy = map(midEnergy, 0, 255, 0, 100);
    
    highEnergy = map(highEnergy, 0, 255, 0, 100);

    // Energy Position
    let sizeLowMid = map(lowMidEnergy,minlowMid,maxlowMid,  height + originOffset, (height / 2) + 100);
    let sizemidEnergy= map(midEnergy, 5 , 100, height+ originOffset , (height / 2) +100);
    let sizehighEnergy = map( highEnergy, 5 ,maxlowMid, height+ originOffset, (height / 2)+ 200);
    
    histLowMid.push(sizeLowMid);
    histHighMid.push(sizehighEnergy);
    histMid.push(sizemidEnergy);
    if (histLowMid.length*20 > width * 2){
        histLowMid = [];
        histHighMid = [];
        histMid = [];
        
        pg = createGraphics(windowWidth, windowHeight);
    }
    
    ///  Low Mid
    for(var i = 0; i< histLowMid.length; i++){
        bg.push();
        bg.fill(255);

        var y = histLowMid[i] + ogX;
        var x = i;

        if(x * 20 > width)
        {
            y = histLowMid[i] + originOffset;
            x = (i * 20 - width) / 20;
        }
        // x += random(-0.2,0.2);

        // rotate(x);
        if (lowMidEnergy>1){
            bg.rect(x*20, y, 20, lowMidEnergy/2);
        }

        bg.pop();


    }
    
    ///  High Mid
    // stroke("#4c44eb");

    noStroke();
    fill(0);
    for(var l = 0; l< histHighMid.length; l++){
        var highY = histHighMid[l] + ogX;
        var highX = l;

        if(highX * 20 > width)
        {
            highY = histHighMid[l] + originOffset;
            highX = (l * 20 - width) / 20;
        }
        if (highEnergy>1){
            bg.rect(highX*20, highY, 1.5, highEnergy*5);

        }
    }

    //// Mid
    beginShape();
    for(var j = 0; j< histMid.length; j++){
        var posY = histMid[j] + ogX; 
        var posX = j;

        if(posX * 20 > width)
        {
            posY = histMid[j] + originOffset;
            posX = (j * 20 - width) / 20;
        }
        if (midEnergy>5){
            bg.noStroke();
            bg.fill(0)
            bg.ellipse(posX*20 ,posY , midEnergy/5 +random(-25,5));
            bg.ellipse(posX*25+random(-5,5),posY+random(-5,5),random(5,20));
            bg.ellipse(posX*20+random(-5,25),posY+random(-5,5),random(5,20));
        }
        


    }
    endShape();

    if(checkBeat){
        drawingContext.filter = 'blur(10px) opacity(0.5)';
        pg.beginShape();
        // pg.stroke(3);
        pg.noStroke();
        // pg.translate(width/2, height/2);
        pg.fill(color(random(50,255), random(50,255), random(100,200)));
        pg.ellipse(random(50, width-200), random(0, height), random(100,300));
        
        drawingContext.filter = 'blur(0)';

        pg.textFont(font);
        pg.textSize(15);
        pg.fill(0);
        pg.text(random(textArray) + "\xa0" + random(textArray),  random(100,width), random(100,height) );
       
    }

    drawingContext.filter = 'blur(0)';

    image(bg, 0, 0);
 
    image(pg, 0, 0);







}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (keyCode === ENTER){
        if (sound.isPlaying()){
            sound.stop();
        }
        else {
            sound.play();
        }
    }
    
    if ( keyCode === SHIFT){
        saveCanvas(canvas, "visual", "png");
    }
    // background(220);
    
  }

  function detectBeat(level) {
    if (level  > beatCutoff && level > beatThreshold){
      onBeat();
      beatCutoff = level *1.2;
      framesSinceLastBeat = 0;
    } else{
    // pg.fill(bgcolor);
    // pg.rect(0,0,width,height);
    checkBeat = false;
      if (framesSinceLastBeat <= beatHoldFrames){
        framesSinceLastBeat ++;
      }
      else{
        beatCutoff *= beatDecayRate;
        beatCutoff = Math.max(beatCutoff, beatThreshold);
      }
    }
  }
  
  function onBeat() {
    clear();
    // bgcolor = color(random(50,255), random(50,255), random(100,200));
    checkBeat = true;
  }



// function setup(){
//     let canvas = createCanvas(windowWidth, windowHeight);
//     canvas.addClass('mycanvas');
//     song = loadSound("media/bdrmm - Bedroom - 06 (The Silence).mp3", loaded);

//     amp = new p5.Amplitude();
//     // freq = new p5.FFT();
// }

// function loaded(){
//     song.play();

// }

// function draw(){

//     background(10);
//     var vol = amp.getLevel();
//     // var spectrum = freq.analyze();
//     // console.log(spectrum);
//     hist.push(vol);
//     stroke(255);
//     strokeWeight(5);
//     noFill();
//     beginShape();
//     for(var i = 0; i< hist.length; i++){
//         var y = map(hist[i], 0, 1, height-100, 0);
//         point(i*10, y);
//     }
//     for(var j = 0; j< hist.length; j++){
//         var m = map(hist[i], 0, 1, height-200, 0);
//         point(j*10, m);
//     }
//     endShape();

//     if (hist.length*10 > width){
//         hist.splice(0,1);
//     }
//     // ellipse(100, 100, 200,vol * 200);
// }

// getPeaks()
// getOctaveBands()

// References
// http://modeleightysix.com/i-dont-wanna-go
// 