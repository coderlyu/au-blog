/**
 * from
 * https://leetcode.cn/problems/simplify-path/?envType=study-plan-v2&envId=top-interview-150
 *
 *
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const parts = path.split("/").filter((part) => part !== "" && part !== ".");
  for (let i = 0; i < parts.length; i++) {
    const cur = parts[i];
    if (cur === "..") {
      stack.pop();
    } else {
      stack.push(cur);
    }
  }
  return "/" + stack.join("/");
};

console.log(simplifyPath("/home/user/Documents/../Pictures")); // "/home/user/Pictures"
console.log(simplifyPath("/.../a/../b/c/../d/./")); //  "/.../b/d"
