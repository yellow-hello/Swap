

var a = prompt('Enter the first variable: ');
var b = prompt('Enter second variable')

function setup(){
  var b2 = createButton("click here to Swap");

  b2.mousePressed(swap)
  

  }


function draw()
{
}

function swap(){
  [a,b] = [b,a];

  console.log("tha value of a now is : " + a);
  console.log("tha value of b now is : " + b);
}
