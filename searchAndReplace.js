
function myReplace(str, before, after) {

if (before != before.toLowerCase()){
 return str.replace(before,after.charAt(0).toUpperCase() + after.slice(1));
}
  return str.replace(before,after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
