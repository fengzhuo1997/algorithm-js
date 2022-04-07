/*
 * 1.选择排序
 * O(n的2次幂 - n)
 */

var arr = [6, 5, 4, 3, 2, 1];
var step = 0;

var sort = (arr, step) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var medium = arr[i];
        arr[i] = arr[j];
        arr[j] = medium;
        step += 2;
      } else {
        step += 1;
      }
      console.log(arr);
    }
  }
  console.log(arr);
  console.log("时间复杂度:" + step);
};

sort(arr, step);
