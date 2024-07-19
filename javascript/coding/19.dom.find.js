/**
 * from
 * https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree
 */

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // your code here
  const walkerA = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
  const walkerB = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);
  let nodeA = walkerA.currentNode;
  while (nodeA && nodeA !== target) {
    walkerB.nextNode();
    nodeA = walkerA.nextNode();
  }
  if (nodeA && nodeA === walkerB.currentNode) {
    return walkerB.currentNode;
  }
  return walkerB.currentNode;
};
