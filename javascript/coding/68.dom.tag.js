/**
 * from
 * https://bigfrontend.dev/problem/get-DOM-tags
 */

/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  // your code here
  const tags = new Set();
  dfs(tree);
  function dfs(node) {
    if (!node) return;
    tags.add(node.tagName.toLowerCase());
    for (const child of node.children) {
      dfs(child);
    }
  }
  return Array.from(tags);
}
