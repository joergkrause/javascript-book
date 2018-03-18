class GenericNumbers<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
var stringNumeric = new GenericNumbers<string>();
stringNumeric.zeroValue = "zero";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
