/**
 * from
 * https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option
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
function debounce(func, wait, option = { leading: false, trailing: true }) {
  // your code here
  const { leading, trailing } = option;
  let timer = null;
  let lastArgs = null;

  return function (...args) {
    const time = () => {
      timer = setTimeout(() => {
        if (trailing && lastArgs) {
          func.apply(this, lastArgs);
        }
        lastArgs = null;
        timer = null;
      }, wait);
    };
    if (!timer && leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }
    clearTimeout(timer);
    time();
  };
}
