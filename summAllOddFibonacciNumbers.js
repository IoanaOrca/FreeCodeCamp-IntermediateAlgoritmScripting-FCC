
function sumFibs(num) {
  var firstNumber=1;
  var fibNumber=1;
  var sumFib=2;
  var inbetween=0;
  while (fibNumber+firstNumber<=num){
    if ((fibNumber+firstNumber)%2!==0) sumFib+=fibNumber+firstNumber;
    inbetween=firstNumber;
    firstNumber=fibNumber;
    fibNumber=fibNumber+inbetween;
  }
  return sumFib;
}

sumFibs(4);
