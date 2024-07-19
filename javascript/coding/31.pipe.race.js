/**
 * from
 * https://bigfrontend.dev/problem/implement-async-helper-race
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
function race(funcs) {
  // your code here
  return function (callback, data) {
    let finished = false;
    funcs.forEach((func) => {
      const cb = (error, preData) => {
        if (finished) return;
        finished = true;
        callback(error, preData);
      };
      func(cb, data);
    });
  };
}
