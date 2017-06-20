
  function smallestCommons(arr) {
    var numbers = [];

    for (var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
    numbers.push(i);
    }

    return numbers.reduce(function(previousValue, currentValue) {
    var gcdPrevCurr = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / gcdPrevCurr;
    });

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }

}


smallestCommons([5,1]);
