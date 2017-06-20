
function pairElement(str) {
  var adn=[];
  for (var i=0;i<str.length;i++){
    switch (str.charAt(i)) {
      case "A": adn.push(["A","T"]);
        break;
      case "T": adn.push(["T","A"]);
        break;
      case "C":adn.push(["C","G"]);
        break;
      case "G":adn.push(["G","C"]);
    }
  }
  return adn;
}

pairElement("GCG");
