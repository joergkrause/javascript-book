class Grid {
  static origin = {x: 0, y: 0};
  calculateDistance(point:  {  
                        x: number; 
                        y: number;
                    }) {
    var xDist = (point.x - Grid.origin.x);
    var yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

var grid1 = new Grid(1.0);  // 1x scale
var grid2 = new Grid(5.0);  // 5x scale

const log = console.log;

log(grid1.calculateDistance({x: 10, y: 10}));
log(grid2.calculateDistance({x: 10, y: 10}));