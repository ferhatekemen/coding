var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
 this.getFullName = function() {
    return firstAndLast;
  }
  this.getFirstName=function(){
  return firstAndLast.split(' ')[0]}
  
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  }

this.setFirstName=function(first) {return firstAndLast= firstAndLast.replace(/^\w+/gi, first);

  }
this.setLastName = function(last) {
    return firstAndLast= firstAndLast.replace(/\w+$/gi, last);
  }
  this.setFullName = function(firstAndLas) {
     return firstAndLast= firstAndLast.replace(/\w+ \w+/gi, firstAndLas);
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
