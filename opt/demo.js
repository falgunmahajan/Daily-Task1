'use strict'; 
(function() {

    let person={
      firstName : 'Falgun',
      lastName : 'Mahajan',
      age : 24,
      isAdult()
      {
        return this.age>=18
      }
    };
    for (var propertyName in person)
    {
      display(propertyName);
    }
})();