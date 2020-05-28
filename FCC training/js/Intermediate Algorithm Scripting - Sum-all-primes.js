function sumPrimes(num) {
var aa=[2];
var bb=[2];
for(let i=3; i<=num; i++){aa.push(i-1);
if(aa.every(c =>i%c!==0)){bb.push(i)}
}
return bb.reduce((x,y)=> x+y)
}

sumPrimes(10);
