function telephoneCheck(str) {
  // Good luck!
   var arr=str.split('');
   var dd=arr.filter(a=>/\d/.test(a));
  var pure=arr.filter(a=>/([\d\S?])/.test(a)).filter(a=>/([^-])/.test(a));
  var bb=arr.length;

  return !/[?]/.test(str) && dd.length===11 &&pure.length===13 && pure[0]==='1'&& arr[0]==='1' ? true
:!/[?]/.test(str) && dd.length===11 &&pure.length===11 && pure[0]==='1'&& arr[0]==='1' ? true
  :!/[?]/.test(str) && !/[)]$/.test(str) && dd.length===10 &&pure.length===12 ? true 
   :!/[?]/.test(str)  && dd.length===10 &&pure.length===10 ? true
     :false
}

telephoneCheck("555)-555-5555");
