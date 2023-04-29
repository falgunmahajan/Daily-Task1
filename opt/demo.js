'use strict'; 
(function() {

    let person={
      firstName : 'Falgun',
      lastName : 'Mahajan',
      age : 24,
    };
   for(var propertyName in person)
   {
    display(propertyName+ " : " +person[propertyName])
   }
})();