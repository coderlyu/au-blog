/**
 * from
 * https://leetcode.cn/problems/valid-parentheses/?envType=study-plan-v2&envId=top-interview-150
 *
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const leftChars = ["(", "[", "{"];
  const rightChars = [")", "]", "}"];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (leftChars.includes(c)) {
      stack.push(c);
    } else if (rightChars.includes(c)) {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (map[c] !== top) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("([)]")); // false
