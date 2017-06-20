function uniteUnique(arr) {
  var args = [].slice.call(arguments);
  var onlyOneOfEach=[];
 for (var i=0;i<args.length;i++){
   for (var j=0;j<args[i].length;j++) {
    if (onlyOneOfEach.includes(args[i][j])!==true)  onlyOneOfEach.push(args[i][j]);
   }
 }
  return onlyOneOfEach;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
