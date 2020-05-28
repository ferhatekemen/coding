function uniteUnique(arr) {
    var newArr=[]
 let aa= Array.from(arguments);
 
  for(let i=1; i < aa.length; i++){
 for(let j=0; j < aa[i].length; j++){
 
 if(aa[0].indexOf(aa[i][j])<0){aa[0].push(aa[i][j])
 }
 
 }

 }
  return aa[0];
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
