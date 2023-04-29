'use strict'; 
(function() {

    let person={
      firstName : 'Falgun',
      lastName : 'Mahajan',
      age : 24,
    };
  display(Object.getOwnPropertyDescriptor(person,"firstName"));
})();