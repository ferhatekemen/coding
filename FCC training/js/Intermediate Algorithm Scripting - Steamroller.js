function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattenArr=[];
  function flatten(arg){
  if(!Array.isArray(arg)){flattenArr.push(arg)}

else{for(var a in arg){flatten(arg[a])}}  }

arr.forEach(flatten);
return flattenArr;
  }

steamrollArray([1, [2], [3, [[4]]]]);
