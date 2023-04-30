'use strict'; 
(function() {
  function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
Person.prototype.age = 29;
  let manas = new Person('Manas', 'Mahajan');
  let falak = new Person('Falak', 'Mahajan')
  Person.prototype={age:18};
  display(Person.prototype);
  let mayuri = new Person('Mayuri', 'Mahajan')
  display(manas.age);
  display(falak.age);
  display(mayuri.age);
  
})();