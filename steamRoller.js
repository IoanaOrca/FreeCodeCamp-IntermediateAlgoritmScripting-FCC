function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArray=[];

  flatten(arr);

  function flatten(arr) {
    arr.forEach(function(arr2){
           if (!Array.isArray(arr2)){
      newArray.push(arr2);
    } else {
      flatten(arr2);
    }
                });
  }

  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
