interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;

console.log(square.color);