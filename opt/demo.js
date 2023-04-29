'use strict'; 
(function() {

    let person={
      firstName : 'Mayuri',
      lastName : 'Mahajan',
      age : 18,
      isAdult()
      {
        return this.age>=18
      }
    };
    let healthStats = {
      height : 68,
      weight: 150
    };
    function mergeHealthStats(person,healthStats)
    {
      return Object.assign({},person,healthStats)
    }
    let mergedPerson = mergeHealthStats(person,healthStats)
    display(mergedPerson)
    display(person)
})();