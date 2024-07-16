/**
 * from
 * https://bigfrontend.dev/problem/Next-Right-Sibiling
 */

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  // your code here
  if (!root || !target) return null;
  const stack = [root];
  while (stack.length) {
    const node = stack.shift();
    if (node === target) {
      return stack[0] || null;
    }
    stack.push(...node.children);
  }
  return null;
}
