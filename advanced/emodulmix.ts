enum Color {
  red = 1,
  green = 2,
  blue = 4
}

type moreColors = "yellow" | "white" | "magenta" | "cyan";

module Color {
  export function mixColor(colorName: moreColors) {
      if (colorName == "yellow") {
          return Color.red + Color.green;
      }
      else if (colorName == "white") {
          return Color.red + Color.green + Color.blue;
      }
      else if (colorName == "magenta") {
          return Color.red + Color.blue;
      }
      else if (colorName == "cyan") {
          return Color.green + Color.blue;
      }
  }
}

const e = Color.green;
console.log(Color.mixColor("yellow"));