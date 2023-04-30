'use strict'; 
(function() {
  function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
Person.prototype.age = 29;
  let manas = new Person('Manas', 'Mahajan');
  display(manas.__proto__);
  display(manas.__proto__.__proto__);
  
  display(manas.__proto__.__proto__.__proto__);
})();