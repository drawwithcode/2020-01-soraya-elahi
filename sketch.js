
function preload(){
  // put preload code here
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(24);
  background("black");
}
function draw() {

  noFill();

 {
  translate(width/2,height/2);
    rotate(frameCount*3);
    stroke("gold");
    strokeWeight(1); stroke(lerpColor(color("magenta"),color("yellow"),frameCount/150));
    square(300,80,20); square(20,25,20); square(50,25,20); square(80,10,20); square(110,10,200);
    colorMode(HSB, 100);
  stroke(100*mouseX/windowWidth, 100, 100);
  ellipse(300,10,70);ellipse(300,100,100);
  strokeWeight(1);
  rect(-width/2, -height/2, width);
  pop();

}
}
