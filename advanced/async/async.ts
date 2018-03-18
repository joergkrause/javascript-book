"use strict";

async function printDelayed(elements: string[]) {
    for (const element of elements) {
        await delay(200);
        console.log(element);
    }
}

async function delay(milliseconds: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

printDelayed(["Hallo", "neue", "asynchrone", "Welt"]).then(() => {
    console.log();
    console.log("Printed every element!");
});
