for (let i = 1; i < 11; i++) {
  if (i == 5) continue;
  console.log("I = " + i + " I*I = " + (i * i));
  if (i == 9) {
    break;
  }
}