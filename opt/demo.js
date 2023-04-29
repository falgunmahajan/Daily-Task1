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
    let person1=person;
    // let person1={
    //   firstName : 'Falgun',
    //   lastName : 'Mahajan',
    //   age : 24,
    //   isAdult()
    //   {
    //     return this.age>=18
    //   }
    // };
    display(person1==person)
    display(person1===person)
    display(Object.is(person1,person))
})();