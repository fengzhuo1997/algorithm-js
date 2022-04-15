/*
 * 6.递归行为
 * O(log2为底N的对数)
 */

var arr = [3, 3, 5, 6, 7, 4, 100, 876, 654, 7896, 8, 3]; // 找出数组中最大的值

var recursive = (arr) => {
  var newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) {
      arr[i] >= arr[i + 1] ? newArr.unshift(arr[i]) : newArr.unshift(arr[i + 1]);
    } else {
      newArr.unshift(arr[i]);
    }
  }
  if (newArr.length == 1) {
    console.log("最大数字是:" + newArr[0]);
    return newArr[0];
  } else {
    recursive(newArr);
  }
};

recursive(arr);
