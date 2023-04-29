'use strict'; 
(function() {

    let person={
      name:
      {
        firstName : 'Falgun',
        lastName : 'Mahajan'
      },
      age : 24,
    };
    Object.defineProperty(person, 'fullName', {
      get : function(){
        return this.name.firstName+ "  " +this.name.lastName;
      },
      set: function(value){
        var nameParts= value.split(' ');
        this.name.firstName = nameParts[0];
        this.name.lastName = nameParts[1];
      }
    });
    person.fullName="Manas Mahajan"
    display(person.fullName);
    display(person.name.firstName);
    display(person.name.lastName);

})();