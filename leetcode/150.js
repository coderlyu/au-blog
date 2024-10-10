/**
 * from
 *https://leetcode.cn/problems/evaluate-reverse-polish-notation/?envType=study-plan-v2&envId=top-interview-150


 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const chars = ["+", "-", "*", "/"];
  for (let i = 0; i < tokens.length; i++) {
    const c = tokens[i];
    if (chars.includes(c)) {
      const right = stack.pop();
      const left = stack.pop();
      if (c === "+") {
        stack.push(left + right);
      } else if (c === "-") {
        stack.push(left - right);
      } else if (c === "*") {
        stack.push(left * right);
      } else {
        stack.push(parseInt(left / right));
      }
    } else {
      stack.push(Number(c));
    }
  }
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
