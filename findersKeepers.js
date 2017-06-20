function findElement(arr, func) {
  var num=0;
  arr.filter(func);
  num=arr.filter(func)[0];
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
