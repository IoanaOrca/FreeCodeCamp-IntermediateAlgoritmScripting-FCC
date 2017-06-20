
function translatePigLatin(str) {
  if ([97,101,105,111,117].includes(str.charCodeAt(0))){
      return str+"way";
      }
   else if ([97,101,105,111,117].includes(str.charCodeAt(1))){
      return str.slice(1)+str.charAt(0)+"ay";
      }
  else return str.slice(2)+str.charAt(0)+str.charAt(1)+"ay";
}

translatePigLatin("california");
