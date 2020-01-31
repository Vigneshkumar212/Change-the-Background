// INITIALIZE ALL YOUR VARIABLESQ
// Ideally you would create 3 variables. red blue green or r, g, b
var r ;
var b ;
var g ;

function setup(){
  createCanvas(1200,400);
}
function draw(){
    
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
  // Use the map() function to do so.

  let r = map(mouseX, 200, 400, 255, 100);
    let g = map(mouseX, 401, 800, 100,255);
    let b = map(mouseX, 801, 1200, 100, 255);

  // Pass the values to the background() function you have learnt previously.
    background(r,g,b);
  // Create an ellipse that will move around with your mouse about the X axis.
  
  ellipse(mouseX,mouseY,20,20) ; 
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}