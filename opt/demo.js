'use strict'; 
(function() {

    let person={
      firstName : 'Falgun',
      lastName : 'Mahajan',
      age : 24,
    };
    Object.defineProperty(person,'firstName', {configurable:false})
    delete person.firstName;
    display(person);
})();