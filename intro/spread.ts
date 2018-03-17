let obj = { x: 10, y: 20, z: 30 };
let { z, ...obj1 } = obj;

console.log(`X=${obj1.x} Y=${obj1.y} Z=${z}`);
