'use strict'; 
(function() {

    let person={
      firstName : 'Falgun',
      lastName : 'Mahajan',
      age : 24,
    };
    Object.defineProperty(person,'firstName', {configurable:false})
    Object.defineProperty(person,'firstName', {writable:true})
})();