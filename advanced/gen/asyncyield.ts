if(Symbol["asyncIterator"] === undefined) ((Symbol as any)["asyncIterator"]) = Symbol.for("asyncIterator");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function* g() {
  yield 1;
  await sleep(1000);
  yield* [2, 3];
  yield* (async function *() {
    await sleep(3000);
    yield 4;
  })();
}

async function needAsyncFunction() {
  for await (const item of g()){
    console.log(item);
  }
}

needAsyncFunction();