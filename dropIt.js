function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0]))
      return arr;
     else arr.shift();

  }
  return arr;
}

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3; });
