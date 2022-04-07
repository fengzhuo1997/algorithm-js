/*
 * 3.异或运算(位运算)
 * 数组中有一个数出现了奇数次，其他数出现了偶数次，把这个出现奇数次的数找出来
 */

var arr = [2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6];

var xor = (arr) => {
  var eor = 0;
  for (let i = 0; i < arr.length; i++) {
    eor = eor ^ arr[i];
  }
  console.log(eor);
};

xor(arr);
