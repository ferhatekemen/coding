function palindrome(str) {
  // Good luck!
      var reversed='';
  var pure= str.toLowerCase().split('').filter(a=>!/[\W_]/g.test(a));
  for(let i=pure.length-1; i>=0; i--)
  {reversed += pure[i]}  
  
return reversed == str.toLowerCase().split('').filter(a=>!/[\W_]/g.test(a)).join('')
}



palindrome("eye");
