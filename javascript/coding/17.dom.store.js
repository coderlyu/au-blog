/**
 * from
 * https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node
 */

class NodeStore {
  /**
   * @param {Node} node
   * @param {any} value
   */
  symbolKey = "[NodeStore Scoped]";
  keys = {};
  index = 0;
  set(node, value) {
    if (node[this.symbolKey]) return;
    const key = this.index++;
    node[this.symbolKey] = key;
    this.keys[key] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.keys[node[this.symbolKey]];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.keys[node[this.symbolKey]];
  }
}
