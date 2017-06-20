
function sumPrimes(num) {
  var boo=true;
  var sum=0;
  for (var isPrime=2;isPrime<=num;isPrime++){
    boo=true;
  for (var i=2;i<Math.ceil(isPrime/2)+1;i++){
    if (((isPrime%i)===0)) boo=false;
  }
  if (boo===true) sum+=isPrime;
  }
  return sum;
}

sumPrimes(10);
