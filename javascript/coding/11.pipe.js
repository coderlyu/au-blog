/**
 * from
 * https://bigfrontend.dev/problem/what-is-composition-create-a-pipe
 */

/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // your code here
  return function (...arg) {
    return funcs.reduce((acc, func) => func(acc), ...arg);
  };
}
