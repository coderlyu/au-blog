/**
 * from
 * https://bigfrontend.dev/problem/Traverse-DOM-level-by-level
 */

/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  // your code here
  const res = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      res.push(node);
      queue.push(...node.children);
    }
  }
  return res;
}
