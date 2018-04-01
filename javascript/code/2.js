'use strict';

// 冒泡排序：循环比较找出每次的最大值或者最小值，放到最后
{
  function bubbleSort(arr) {
    for(let i=0,len=arr.length; i<len-1; i++) {
      for(let j=i+1; j<len; j++) {
        if(arr[i] > arr[j]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }  
  console.log('---------question 1--------');  
  let ar = [3,4,5,7,9,11,1];
  let res = bubbleSort(ar);
  console.log(res); // [ 1, 3, 4, 5, 7, 9, 11 ]
}

// 快速排序：

// 在数据集之中，选择一个元素作为"基准"（pivot）。
// 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
// 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
{
  function quickSort(arr) {
    // 首先判断数组的长度，小于等于1时不用排序
    if (arr.length <= 1) { 
      return arr; 
    }
    // 找一个基点 此处找中点
    let pivotIndex = Math.floor(arr.length / 2);
    // 然后根据基点把数组分成两段
    let pivot = arr.splice(pivotIndex, 1)[0]; // 获取基点
    let left = [];
    let right = [];

    // 循环操作，小于基点的放到左边，大于基点的，放到右边
    for(let i=0; i<arr.length; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    // 最后递归自身，直到循环完毕，返回最终排好序的数组
    let res =  quickSort(left).concat([pivot],quickSort(right));
    return res;
  }

  console.log('---------question 2--------');  
  let ar = [3,4,5,7,9,11,1];
  let res = quickSort(ar);
  console.log(res); // [ 1, 3, 4, 5, 7, 9, 11 ]
}

// 希尔排序 // todo
{
  // http://math.hws.edu/eck/js/sorting/xSortLab.html
  // https://www.cnblogs.com/libin-1/p/5998870.html
}