let reviewArray = [];
let getRand;

function preload() {
  table = loadTable("Review-data.csv", "csv", "header");
}

function setup() {
  var cnv = createCanvas(3456, 4900);
  cnv.style("display", "block");
  cnv.addClass("myPoster");
  cnv.position(0, 0, "absolute");
  cnv.parent("canvas-wrapper");
  cnv.background(int(random(50, 255)), int(random(50, 255)), random(0, 255));

  // print(table.getRowCount());
  var randomFont = random(["IBM Plex Mono", "Newsreader"]);

  let randomSize = random(600, 700);
  textSize(randomSize);
  textLeading(randomSize);
  textFont(randomFont);
  textStyle("italic");
  text("let us \nleave the \nnarrative", 0, random(500, 3000));
  fill(0, 102, 153);

  for (let c = 0; c < table.getRowCount(); c++) {
    reviewArray.push(table.getString(c, 2));
  }
  console.log(reviewArray);
  getRand = int(random(-1, reviewArray.length));
  console.log(getRand);

  for (let i = 0; i < reviewArray.length; i++) {
    let div = createDiv(reviewArray[i]);
    div.parent("wrapper");
    div.position(random(0, 3000), random(0, 4000));
    div.addClass("box");
    div.style("font-size", random(10, 30) + "pt");

    let circle = createDiv("");
    circle.parent("wrapper");

    circle.addClass("circle-shape");
    let randomSize = int(random(50, 500));
    circle.style("width", randomSize + "px");
    circle.style("height", randomSize + "px");
    circle.position(random(0, 3000), random(0, 4000));
  }

  noLoop();
}

function draw() {}

function drawReview(o) {}
