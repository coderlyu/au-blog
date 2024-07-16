/**
 * from
 * https://bigfrontend.dev/problem/implement-async-helper-parallel
 */

/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function parallel(funcs) {
  // your code here
  return function (callback, data) {
    const result = new Array(funcs.length);
    let finishedCount = 0;
    let error = undefined;
    if (funcs.length === 0) {
      callback();
    }
    funcs.forEach((func, index) => {
      const cb = (err, preData) => {
        if (error) return;
        if (err) {
          error = err;
          result[index] = err;
          callback(error, undefined);
          return;
        } else {
          result[index] = preData;
        }
        finishedCount++;
        if (finishedCount >= funcs.length) {
          callback(undefined, result);
        }
      };
      func(cb, data);
    });
  };
}
