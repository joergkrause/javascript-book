interface StringArray {
  [index: number]: string;
}

var myArray: StringArray;
myArray = ["Joerg", "Matthias"];

console.log(myArray[0]);