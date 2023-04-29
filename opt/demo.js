'use strict'; 
(function() {
  let myFunction=function(){}
    display(myFunction.prototype);
  let person = {firstName:'Falgun'};
  display(person.prototype);
  display(person.__proto__);


})();