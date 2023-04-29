'use strict'; 
(function() {

    let person={
      name:
    {
      firstName : 'Falgun',
      lastName : 'Mahajan'},
      age : 24,
    };
    Object.defineProperty(person,'name', {writable:false})
    Object.freeze(person.name)
  person.name.firstName="Mayuri";
  display(person.name);

})();