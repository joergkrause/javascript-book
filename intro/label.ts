outer: for (let i = 0; i < 10; i++) {
  inner: for (let j = 0; j < 10; j++) {
      if (j==3) continue inner;
      if (j==6) continue outer;
      console.log(i + " * " + j + " = " + (i * j));
  }
}