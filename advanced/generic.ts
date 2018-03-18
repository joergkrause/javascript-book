interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

var myIdentity: GenericIdentityFn = identity;

var result = myIdentity<number>(88);
