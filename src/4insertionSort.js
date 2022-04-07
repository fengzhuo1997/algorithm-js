/*
 * 4.插入排序(抓牌排序)
 * O(n的2次幂 + n)
 */

var arr = [6, 5, 4, 3, 2, 1];
var step = 0;

var insertSort = (arr, step) => {
  for (let j = 0; j < arr.length; j++) {
    var newArr = arr.slice(0, j + 1);
    step += 1;
    var length = newArr.length;
    for (let i = 0; i < arr.length; i++) {
      if (arr[length - (i + 1)] < arr[length - (i + 2)]) {
        var medium = arr[length - (i + 1)];
        arr[length - (i + 1)] = arr[length - (i + 2)];
        arr[length - (i + 2)] = medium;
        step += 2;
      } else {
        step += 1;
        break;
      }
    }
  }
  console.log(arr);
  console.log("时间复杂度:" + step);
};

insertSort(arr, step);