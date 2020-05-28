function rot13(str) { // LBH QVQ VG!
var array=str.split('');

var result= array.map(aa => {if(aa.charCodeAt(0)>77 && /\w/.test(aa)){
return String.fromCharCode(aa.charCodeAt(0)-13)
      }
  else if(/\w/.test(aa)){return String.fromCharCode(aa.charCodeAt(0)+13)
  }
  else{return aa}}
  )

  return result.join('');

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
