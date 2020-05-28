function convertToRoman(num) {

var roman='';
var arr=num.toString();
var reversed=[];
for (let i=arr.length-1; i>=0; i--){
reversed+=arr[i]}

var a = reversed[3];
var b = reversed[2];
var c = reversed[1];
var d = reversed[0];

function aa(){a==='1' ? roman +='M'
 :a==='2' ? roman +='MM'
 :a==='3' ? roman +='MMM'
 :''}
 
 function bb(){b==='1' ? roman +='C'
 :b==='2' ? roman +='CC'
 :b==='3' ? roman +='CCC'
 :b==='4' ? roman +='CD'
 :b==='5' ? roman +='D'
 :b==='6' ? roman +='DC'
 :b==='7' ? roman +='DCC'
 :b==='8' ? roman +='DCCC'
 :b==='9' ? roman +='CM'
 :''}

function cc(){c==='1' ? roman +='X'
 :c==='2' ? roman +='XX'
 :c==='3' ? roman +='XXX'
 :c==='4' ? roman +='XL'
 :c==='5' ? roman +='L'
 :c==='6' ? roman +='LX'
 :c==='7' ? roman +='LXX'
 :c==='8' ? roman +='LXXX'
 :c==='9' ? roman +='XC'
 :''}
 
function dd(){d==='1' ? roman +='I'
 :d==='2' ? roman +='II'
 :d==='3' ? roman +='III'
 :d==='4' ? roman +='IV'
 :d==='5' ? roman +='V'
 :d==='6' ? roman +='VI'
 :d==='7' ? roman +='VII'
 :d==='8' ? roman +='VIII'
 :d==='9' ? roman +='IX'
 :''}

aa()
bb()
cc()
dd()

return roman}

convertToRoman(36);
