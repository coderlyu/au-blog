/**
 * from
 * https://bigfrontend.dev/problem/implement-a-simple-DOM-wrapper-to-support-method-chaining-like-jQuery
 */

/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  // your code here
  const elDom = typeof el === "string" ? document.querySelector(el) : el;
  if (!elDom) {
    throw new Error("Element not found");
    return null;
  }
  return {
    css(key, value) {
      elDom.style[key] = value;
      return this;
    },
  };
}
