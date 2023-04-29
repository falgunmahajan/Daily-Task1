'use strict'; 
(function() {

    let Manas={
      firstName : 'Manas',
      lastName : 'Mahajan',
      age : 20,
      isAdult()
      {
        return this.age>=18
      }
    };
    display(Manas.isAdult());
    let Falak={
      firstName : 'Falak',
      lastName : 'Mahajan',
      age : 27,
      isAdult()
      {
        return this.age>=18
      }
    };
    display(Falak.isAdult());
    
})();