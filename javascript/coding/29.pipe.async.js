/**
 * from
 * https://bigfrontend.dev/problem/implement-async-helper-sequence
 */

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  // your code here
  let i = 0;
  return function (callback, data) {
    const next = (preData) => {
      const cb = (err, data) => {
        err ? callback(err, undefined) : next(data);
      };
      if (i >= funcs.length) {
        callback(undefined, preData);
        return;
      }
      const func = funcs[i];
      i++;
      try {
        func(cb, preData);
      } catch (err) {
        callback(err, undefined);
      }
    };
    next(data);
  };
}
const asyncTimes2 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100);
};
const asyncTimes4 = sequence([
  asyncTimes2,
  (callback, data) => {
    callback(true, data * 2);
  },
  asyncTimes2,
]);

asyncTimes4((error, data) => {
  console.log("error", error); // true
  console.log(data); // 4
}, 1);
