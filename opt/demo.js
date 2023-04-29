'use strict'; 
(function() {

    let person1={
      firstName : 'Falgun',
      lastName : 'Mahajan',
      age : 24,
    };
    let person2=Object.create(Object.prototype,{
      firstName:{value:'Falgun', enumerable:true, writable:true,configurable:true},
      lastName:{value:'Mahajan', enumerable:true, writable:true,configurable:true},
      age:{value:24, enumerable:true, writable:true,configurable:true}
    })
    display(person1);
    display(person2);
})();