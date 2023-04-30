'use strict'; 
(function() {
  function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
Person.prototype.age = 29;
  let falgun = new Person('Falgun', 'Mahajan');
  let falak = new Person('Falak', 'Mahajan')
  falgun.age=24
  display(falgun.age);
  display(falgun.__proto__.age);
  display(falgun.hasOwnProperty('age'));
  
})();