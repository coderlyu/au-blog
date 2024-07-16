/**
 * from
 * https://bigfrontend.dev/problem/implement-basic-debounce
 *
 */

// let currentTime = 0;

// const run = (input) => {
//   currentTime = 0;
//   const calls = [];

//   const func = (arg) => {
//     calls.push(`${arg}@${currentTime}`);
//   };

//   const debounced = debounce(func, 3);
//   input.forEach((call) => {
//     const [arg, time] = call.split("@");
//     setTimeout(() => debounced(arg), time);
//   });
//   return calls;
// };

// expect(run(["A@0", "B@2", "C@3"])).toEqual(["C@5"]);

// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, wait);
  };
}
