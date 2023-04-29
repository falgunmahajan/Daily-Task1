'use strict'; 
(function() {

  function registerUser(firstName,lastName,age)
  {
    let person={
      firstName,
      lastName,
      age,
      isAdult()
      {
        return this.age>=18
      }
    };
    display(person);
    display(person.isAdult())
    display(Object.keys(person));
  }
  registerUser('Falgun', 'Mahajan',25)
})();