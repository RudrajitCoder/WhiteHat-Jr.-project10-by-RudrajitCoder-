var a = prompt('Enter the first variable: ');
var b = prompt('Enter the sceond variable: ');

function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousePressed(swap);
  }


function draw()
{
createCanvas[800,800];
backround(black);
Text(a,200,400);
Text(b,600,400);
}

function swap(){
[a,b] = [b,a];

console.log("the value of a after swaping"+a);
console.log("the value of b after swaping"+b);
}