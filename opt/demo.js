'use strict'; 
(function() {

    function Person(firstName,lastName,age)
    {
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;
      this.isAdult=function(){return this.age>=25;}
    }
    let falak=new Person("Falak", 'Mahajan',27);
    
    let manas=new Person("Manas", 'Mahajan',20);
    display(falak.isAdult())
    display(manas.isAdult())
})();