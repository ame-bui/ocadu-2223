// // scale;
// const lineCount = 30;
// var song, amp, freq;

var hist =[];



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

var sound, ftt, spectrum, amplitude, aniSpeed; 
var gtpth;

let posX = 0;
let posY = 0;
let treblePosX = 0;
let treblePosY = 0;


var minTTreble = 0;
var maxTTreble = 100;
var aniSpeed = 15;
var my_myTreble = 1;
var my_Speed = 5;

let fft;
let isLeft = true;

let trebleEnergy;
let sizeTrebleEnergy;
let pixelPosition = [];
pixelPosition = [0, 0, 0, 0, 0];

let historyPosition = [];
let historyPositionV2 = [];

function preload() {

sound = loadSound("media/LONG SEASON.mp3");
}

function setup() {
    
    createCanvas(windowWidth, windowHeight);

    unitSizeX = width / 100;
    unitSizeY = 310;

    frameRate(30);
    pixelDensity();
    setAttributes('antialias', true);
    smooth();
  
    
    sound.play();
    amplitude = new p5.Amplitude();
    fft = new p5.FFT();
    sound.amp(0.4);
}


function draw(){
    background(0);

    spectrum = fft.analyze();
    let trebleEnergy = fft.getEnergy("lowMid");
    // console.log(trebleEnergy);

    trebleEnergy = map(trebleEnergy, 0, 255, 0, 100);
    // console.log(trebleEnergy);

    let sizeTrebleEnergy = map(trebleEnergy,minTTreble,maxTTreble, height-200, 0);
    console.log("sizeTrebleEnergy is " + sizeTrebleEnergy);
    hist.push(sizeTrebleEnergy);

    beginShape();
    stroke(255);
    strokeWeight(3);
    noFill();
    for(var i = 0; i< hist.length; i++){
        var y = hist[i];
        point(i*10, y);
    }
    endShape();
    if (hist.length*10 > width){
        hist.splice(0,1);
    }
    let level = amplitude.getLevel();
    aniSpeed = map(level, 0, 0.2, 1, 4);

   

}