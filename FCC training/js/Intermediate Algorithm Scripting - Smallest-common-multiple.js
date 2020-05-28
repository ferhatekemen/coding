function smallestCommons(arr) {
  var aa=[];
var bb=[];
var cc=arr.sort((a,b)=> a-b);

  for(let i=cc[0]; i<=cc[1]; i++){
    aa.push(i)}

var dd=aa.reduce((x,y)=>x*y);

for(let j=cc[0]; j <= dd ; j++){if(aa.every(a=>j%a===0))
return j}
}


//smallestCommons([1,5]);
