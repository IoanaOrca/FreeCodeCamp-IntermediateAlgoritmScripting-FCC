
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var boo=true;
  // Only change code below this line
  var prop=Object.keys(source);
  for (var i=0;i<collection.length;i++) {
    boo=true;
    for (var j=0;j<prop.length;j++){
      if(Object.keys(collection[i]).indexOf(prop[j]) === -1) {
       boo=false;
      }
      else if (collection[i][prop[j]]!=source[prop[j]]){

        boo=false;
      }
    }
      if (boo===true) {
        arr.push(collection[i]);
      }


  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
