'use strict'; 
(function() {

    let person={
      firstName : 'Falgun',
      lastName : 'Mahajan',
      age : 24,
    };
    Object.defineProperty(person,'firstName', {enumerable:false})
    for(let propertyName in person)
    {
      display(propertyName+ ':' +person[propertyName])
    }
    display(Object.keys(person));
    display(JSON.stringify(person));
    display(person.firstName);
})();