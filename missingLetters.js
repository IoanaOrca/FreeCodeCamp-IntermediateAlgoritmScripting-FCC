
function fearNotLetter(str) {
  var missingLetters='';
  for (var i=0;i<str.length-1;i++){
    if (str.charCodeAt(i)+1!=str.charCodeAt(i+1)) {
      missingLetters+=String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
   return (missingLetters.length===0) ? undefined:missingLetters;


}

fearNotLetter("bcd");
