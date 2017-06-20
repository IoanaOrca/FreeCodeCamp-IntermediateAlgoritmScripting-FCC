
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.toLowerCase().replace(/ |_/gi,"-");
}

spinalCase('AllThe-small Things');
