function diffArray(arr1, arr2) {
  var newArr = [];
  var newarray=[];
  var count=0;
  newArr=arr1.concat(arr2);
  for(var i=0;i<newArr.length;i++){
    for (var j=0;j<newArr.length;j++){
      if(newArr[i]===newArr[j]){
        count=count+1;
      }
    }
    if (count===1) {
      newarray.push(newArr[i]);
    }
    count=0;
  }
  return newarray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
