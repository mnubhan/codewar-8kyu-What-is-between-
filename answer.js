function between(a, b) {
  var arr = [];
  for(var i = a; i <= b; i++)
  arr.push(i);
  return arr;
  }

const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

const between = (a, b) =>
  [...Array(b - a + 1)].map((_, idx) => idx + a);
