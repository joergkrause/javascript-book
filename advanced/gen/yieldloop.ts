function* floop() {
  yield 1;
  yield* [2, 3];
}

for(const f of floop()) {
  console.log("Step:" + f);
}
