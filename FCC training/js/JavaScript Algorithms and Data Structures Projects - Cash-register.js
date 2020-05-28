function checkCashRegister(price, cash, cid) {
var arr=Array.from(arguments);
var changed=parseFloat((cash-price).toFixed(2));
var cidSum=parseFloat((arr[2].map(c=> c[1]).reduce((a,b)=>a+b, 0)).toFixed(2));
var units=[0.01,0.05,0.1,0.25,1,5,10,20,100];

var change;

if(changed>cidSum){
change={status:"INSUFFICIENT_FUNDS",
change: []}}
else if(changed===cidSum){change={status:"CLOSED", change: []}}
else{change={
status:"OPEN",
change: []}}

function aa(){
if(change.status==="OPEN"){
for(let i=8; i>=0; i--){
if(parseFloat((changed/(arr[2][i][1])).toFixed(2))>=1) {
changed=parseFloat((changed-arr[2][i][1]).toFixed(2));
change.change.push(arr[2][i])
}
else{
if(parseFloat((Math.floor(changed/units[i])).toFixed(2))>0) {arr[2][i][1]=parseFloat((Math.floor(changed/units[i])*units[i]).toFixed(2));
change.change.push(arr[2][i]);
changed = parseFloat((changed-Math.floor(changed/units[i])*units[i]).toFixed(2));
}
}
}
if(changed>0.01){change.status="INSUFFICIENT_FUNDS";
change.change=[]}
}
if(change.status==="CLOSED"){
for(let i=0; i<arr[2].length; i++){
changed=parseFloat((changed-arr[2][i][1]).toFixed(2));
change.change.push(arr[2][i])
}
}
}

aa()
  // Here is your change, ma'am.
  return change
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])