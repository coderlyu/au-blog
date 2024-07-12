/**
 * from
 * https://bigfrontend.dev/problem/get-DOM-tree-height
 */

/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  // your code here
  if (!tree) return 0;
  // dfs(tree);
  function dfs(node) {
    if (!node) return height;
    let max = 0;
    for (const child of node.children) {
      const d = dfs(child);
      if (d > max) max = d;
    }
    return max + 1;
  }
  // bfs(tree);
  function iterator(node) {
    let height = 0;
    if (!node) return height;

    let q = [[node, 1]];
    while (q.length) {
      const [node, h] = q.shift();
      height = Math.max(h, height);
      for (let child of node.children) {
        q.push([child, h + 1]);
      }
    }
    return height;
  }
  return iterator(tree);
}
