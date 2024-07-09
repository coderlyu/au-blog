/**
 * 来源于
 * https://bigfrontend.dev/problem/implement-basic-throttle
 */

// let currentTime = 0

// const run = (input) => {
//   currentTime = 0
//   const calls = []

//   const func = (arg) => {
//      calls.push(`${arg}@${currentTime}`)
//   }

//   const throttled = throttle(func, 3)
//   input.forEach((call) => {
//      const [arg, time] = call.split('@')
//      setTimeout(() => throttled(arg), time)
//   })
//   return calls
// }

// expect(run(["A@0", "B@2", "C@3"])).toEqual(["A@0", "C@3"]);

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
  // your code here
}

let currentTime = 0;

const run = (input) => {
  currentTime = 0;
  const calls = [];

  const func = (arg) => {
    calls.push(`${arg}@${currentTime}`);
  };

  const throttled = throttle(func, 3);
  input.forEach((call) => {
    const [arg, time] = call.split("@");
    setTimeout(() => throttled(arg), time);
  });
  return calls;
};

console.log(run(["A@0", "B@2", "C@3"])); // ['A@0', 'C@3']
