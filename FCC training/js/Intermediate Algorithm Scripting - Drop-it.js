function dropElements(arr, func) {
  // Drop them elements.
var aa=Array.from(arguments).slice();
var bb=arr.findIndex(b=> aa[1](b));
if(bb===-1){return []}
else{return arr.slice(bb)};
}

//dropElements([1, 2, 3], function(n) {return n < 3; });
