/*
 * 2.冒泡排序
 * O(n的2次幂 - n)
 */

var arr = [6, 5, 4, 3, 2, 1];
var step = 0;

var sort = (arr, step) => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - (j + 1); i++) {
      if (arr[i] > arr[i + 1]) {
        var medium = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = medium;
        step += 2;
      } else {
        step += 1;
      }
    //   console.log(arr);
    }
  }
  console.log(arr);
  console.log("时间复杂度:" + step);
};

sort(arr, step);
