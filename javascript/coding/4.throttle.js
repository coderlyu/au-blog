/**
 * from
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

function throttle(func, wait) {
  let waiting = false;
  let lastArgs = null;

  function time() {
    setTimeout(() => {
      waiting = false;
      if (lastArgs) {
        func.apply(this, lastArgs);
        waiting = true;
        lastArgs = null;
        time();
      }
    }, wait);
  }

  return function (...args) {
    if (!waiting) {
      func.apply(this, args);
      waiting = true;
      time.call(this);
    } else {
      lastArgs = args;
    }
  };
}
