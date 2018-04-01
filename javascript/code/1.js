'use strict';

// 回文判断
{
  let str1 = 'abcba';
  let str2 = 'abcdefedcbb';
  let str3 = 'abcdefedcba';

  function checkPalindrom(str) {
    return str === str.split('').reverse().join('');
  }
  console.log('---------question 1--------');
  console.log(checkPalindrom(str1)); // true
  console.log(checkPalindrom(str2)); // false
  console.log(checkPalindrom(str3)); // true
}

// 去掉一组整型数组重复的值
{
  let arr1 = [1,1,1,2,3,2,1,4,3,5];
  let arr2 = [1,2,1,4,2,1,5,6,3,3];
  function unique(arr) {
    let json = {};
    let res = [];
    for(var k in arr) {
      if(!json[arr[k]]) {
        json[arr[k]] = true;
        res.push(arr[k]);
      }
    }
    return res;
  }
  console.log('---------question 2--------');
  console.log(unique(arr1)); // [ 1, 2, 3, 4, 5 ]
  console.log(unique(arr2)); // [ 1, 2, 4, 5, 6, 3 ]
}

// 统计一个字符串出现最多的字母, 思路，将字符串的每个字符挂载到一个对象的属性上,统计每个属性出现的字数，在循环获取最大属性
{
  let str1 = 'aaabdcdebbddcaadesssdd';
  let str2 = 'aaaeecdebbddcggedessgg';

  function getMaxLetter(str) {
    if(str.length === 1) {
      return str;
    }
    let json = {};
    // 挂载属性并统计
    for(var k in str) {
      if(!json[str[k]]) {
        json[str[k]] = 1;
      } else {
        json[str[k]] += 1;
      }
    }
    // 对json上的属性的最大值进行比较,然后获取具有最大值的属性
    let maxVal = 1;
    let maxChar = '';
    for(var i in json) {
      if(json[i] > maxVal) {
        maxChar = i;
        maxVal = json[i];
      }
    }
    return maxChar;
  }

  console.log('---------question 3--------');
  console.log(getMaxLetter(str1)); // d
  console.log(getMaxLetter(str2)); // e
}