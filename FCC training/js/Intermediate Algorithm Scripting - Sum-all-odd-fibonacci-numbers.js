function sumFibs(num) {
  var a=[1,1];
if(num<2){return a.shift()}
else {
 for(let i=0; i<num-2; i++){
a.push(
a[a.length-2] + a[a.length-1]
)
}
return a.filter(b=>b%2!==0).filter(a=> a<=num).reduce((a,b) => a+b)}
}

//sumFibs(4);
