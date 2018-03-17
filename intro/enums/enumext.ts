import { Color } from "./enumbase";

declare module "./enumbase" {
  enum Color {
    DarkRed = 3,
    DarkGreen,
    DarkBlue
  }
}

let cb = Color.DarkBlue;
let cg = Color.Green;