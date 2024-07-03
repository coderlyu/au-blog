/**
 * 来源于
 * https://bigfrontend.dev/problem/implement-Array-prototype.flat
 */

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]

function flat(arr, depth = 1) {
  // your imeplementation here
  if (depth === 0) return arr;
  let result = [];
  while (depth > 0) {
    arr = result.length > 0 ? result : arr;
    result = [];
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result.push(...arr[i]);
        flag = true;
      } else result.push(arr[i]);
    }
    if (!flag) break;
    depth--;
  }
  return result;
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr));

// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
