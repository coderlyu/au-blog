/**
 * from
 * https://bigfrontend.dev/problem/implement-curry
 */

// const join = (a, b, c) => {
//     return `${a}_${b}_${c}`
//  }

//  const curriedJoin = curry(join)

//  curriedJoin(1, 2, 3) // '1_2_3'

//  curriedJoin(1)(2, 3) // '1_2_3'

//  curriedJoin(1, 2)(3) // '1_2_3'

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function curryFunc(...args) {
    if (args.length >= fn.length) return fn.call(null, ...args);
    return curryFunc.bind(null, ...args);
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
curriedJoin(1, 2, 3);
curriedJoin(1)(2, 3);
curriedJoin(1, 2)(3);
