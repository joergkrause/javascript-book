class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };


console.log(myGenericNumber.add(3,5));