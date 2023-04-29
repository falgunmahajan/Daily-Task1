'use strict'; 
(function() {
  function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
Person.prototype.age = 29;
  display(Person.prototype);
  let falgun = new Person('Falgun', 'Mahajan');
  let falak = new Person('Falak', 'Mahajan')
  falak.__proto__.age=30;
  display(falgun.__proto__);
  display(falak.__proto__);
  display(Person.prototype===falgun.__proto__);
})();