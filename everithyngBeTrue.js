
function truthCheck(collection, pre) {
  // Is everyone being true?
  var boo=true;
  for (var i in collection) {
   if (!(collection[i].hasOwnProperty(pre))||(!collection[i][pre]) )
       {
     boo=false;
   }
  }
  return boo;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
