/**
 * from
 * https://bigfrontend.dev/problem/improve-a-function
 */

/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const exclude = new Map();
  const keys = [];
  excludes.forEach(({ k, v }) => {
    if (!exclude.has(k)) {
      keys.push(k);
      exclude.set(k, new Set());
    }
    exclude.get(k).add(v);
  });
  return items.filter((item) => {
    return !keys.some((key) => {
      return exclude.has(key) && exclude.get(key).has(item[key]);
    });
  });
}
