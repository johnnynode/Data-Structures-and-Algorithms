'use strict';

// 不借助临时变量，进行两个整数的交换
{
  function swap(a , b) {  
    b = b - a; // 借助两者的差值
    a = a + b; // 此时相当于 a = a + b - a 实现了原来的a值被赋予原来的b值
    b = a - b; // 此时 b = a + b - a - b + a 实现了原来的b值被赋予原来的a值
    return [a,b];
  }
  let a = 3;
  let b = 4;
  let res = swap(a, b);
  console.log('---------question 1--------');  
  console.log(res); // [4,3]
}

// 找出下列正数组的最大差值比如
// 输入 [10,5,11,7,8,9]
// 输出 6
{
  function getMaxProfit(arr) {
    let min = arr[0]; // 获取第一个作为比较的起点
    let maxProfit = 0; // 初始化最大差值

    for(let i=0; i<arr.length; i ++) {
      let now = arr[i]; // 获取当前需要比较的值
      min = Math.min(min, now); // 获取比较两者中最小的值
      var profit = now - min; // 获取当前差值
      maxProfit = Math.max(maxProfit, profit); // 获取当前最大的利润
    }
    return maxProfit;
  }
  let ar = [1,2,3,6,8,23];
  let res = getMaxProfit(ar);
  console.log('---------question 1--------');  
  console.log(res); // 22
}

// 随机生成指定长度的字符串, 比如给定长度为 10 输出 sde13ddes3

{
  function randomString(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let len = str.length;    
    let res = '';
    for(let i=0; i < n; i++) {
      res += str.charAt(Math.floor(Math.random() * len));
    }
    return res;
  }

  var res = randomString(10);
  console.log('---------question 2--------');  
  console.log(res); // 1lq2z19kum
}

// 验证一个数是否是质数

{
  var isPrime = function(n) {
      var divider = 2;
      var limit = Math.sqrt(n);
      while(divider<=limit){
          if(n%divider == 0){
              return false;
          }
          divider++;
      }
      return true;
  }

  console.log(isPrime(18)); // false
  console.log(isPrime(20)); // false
  console.log(isPrime(23)); // true
}