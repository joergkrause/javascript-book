function updateIds<T extends Record<K, string>, K extends string>(
  obj: T,
  idFields: K[],
  idMapping: { [oldId: string]: string }
): Record<K, string> {
  for (const idField of idFields) {
      console.log('X: ', idField);
      const newId = idMapping[obj[idField]];
      console.log('N: ', newId);
      if (newId) {
          console.log('yes');
          obj[idField] = newId;
      } else {
        console.log('no');
      }
  }
  return obj;
}
var r: Record<string, string> = {};
r['a'] = 'b';
r['c'] = 'd';
var result = updateIds(r, ['a', 'c'], { 'b': 'r', 'd': 'v' });
console.log(result);