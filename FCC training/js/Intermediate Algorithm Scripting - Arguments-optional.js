function addTogether() {
var args=Array.from(arguments);
return args.some(a =>typeof a !== 'number') ? undefined
:args.length>1 ? args.reduce((a,b) =>a+b)
:a => typeof a==='number' ? a+ args[0]
: undefined
};