/*
 * 5.二分法
 * O(log2 N的对数)
 */

var arr = [100, 10, 8, 6, 4, 2, 0]; // 有序数组中是否有3
var k = 97;

var dichotomy = (arr, k) => {
  if (arr[0] < k || arr[arr.length - 1] > k) {
    console.log("没有这个数");
    return;
  }
  // k是要查找的数
  var midNum = parseInt(arr.length / 2);
  if (arr[midNum] > k) {
    var newArr = arr.slice(midNum + 1, arr.length);
    dichotomy(newArr, k);
  } else if (arr[midNum] < k) {
    var newArr = arr.slice(0, midNum);
    dichotomy(newArr, k);
  } else if (arr[midNum] == k) {
    console.log("有这个数");
  }
};

dichotomy(arr, k);
