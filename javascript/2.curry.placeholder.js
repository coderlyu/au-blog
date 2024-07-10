/**
 * 来源于
 * https://bigfrontend.dev/problem/implement-curry-with-placeholder
 */

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

//  const curriedJoin = curry(join)
//  const _ = curry.placeholder

//  curriedJoin(1, 2, 3) // '1_2_3'

//  curriedJoin(_, 2)(1, 3) // '1_2_3'

//  curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function curryFunc(...args) {
    const complete =
      args.slice(0, fn.length).filter((e) => e !== curry.placeholder).length >=
      fn.length;
    if (complete) {
      return fn.call(null, ...args.filter((e) => e !== curry.placeholder));
    }
    return function (...newArgs) {
      const finalArgs = [];
      for (let i = 0; i < args.length; i++) {
        if (args[i] === curry.placeholder) {
          if (newArgs.length) finalArgs.push(newArgs.shift());
          else finalArgs.push(curry.placeholder);
        } else {
          finalArgs.push(args[i]);
        }
      }
      if (newArgs.length) {
        finalArgs.push(...newArgs);
      }
      return curryFunc.call(null, ...finalArgs);
    };
  };
}

curry.placeholder = Symbol();
