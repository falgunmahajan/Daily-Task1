'use strict';
(function () {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        static adultAge = 18;
        get fullName()
        {
          return this.firstName+" "+this.lastName;
        }
        set fullName(fullName)
        {
          var nameParts = fullName.split(' ');
          this.firstName = nameParts[0];
          this.lastName = nameParts[1];
        }
        isAdult()
        {
          return this.age>=18;
        }
    }
    display(Person.adultAge);

    class Student extends Person{
      constructor(firstName, lastName, age)
      {
        super(firstName,lastName,age);
        this._enrolledCourses=[];
      }
      static fromPerson(person)
      {
        return new Student(person.firstName,person.lastName,person.age);
      }
      enroll(courseId)
      {
        this._enrolledCourses.push(courseId)
      }
         getCourses()
         {
          return this.fullName+"'s enrolled courses are:"+this._enrolledCourses.join(",")
         } 
    }
    Object.defineProperty(Person.prototype, "fullName", {enumerable:true});
    let jim = new Person('Jim','Cooper', 29);
    display(jim);
    display(jim.isAdult());
    // jim.fullName = "Fred Jones";
    display(jim.fullName);
    let falgun = new Student("Falgun", "Mahajan",24);
    falgun.enroll("CS101");
    display(falgun.getCourses());
    display(falgun);
    let falgunStudent = Student.fromPerson(falgun);
    display(falgunStudent);
   
})();
(function()
{
  display(Math.PI);
  display(Math.abs(-500));
  display(Math.max(2,42,29))
  display(Math.round(2.64))
})();
(function(){
  let date1 = new Date(0);
  display(date1.toString());
  let date2 = new Date(1000);
  display(date2.toString());
  let date3 = new Date("2050-03-25T13:01:30");
display(date3.toString());
let date4 = new Date(2050,3,25,13,1,30,50);
let date5= new Date(2051,3,25,13,1,30,55);
display(date5-date4);
date4.setMonth(5);
display(date4.toString());
  display(date4.getFullYear());
  display(date4.getMonth());
  display(date4.getDate());
  display(date4.getHours());
  display(date4.getMinutes());
  display(date4.getSeconds());
  display(date4.getMilliseconds());


  display(date4.getUTCFullYear());
  display(date4.getUTCMonth());
  display(date4.getUTCDate());
  display(date4.getUTCHours());
  display(date4.getUTCMinutes());
  display(date4.getUTCSeconds());
  display(date4.getUTCMilliseconds());
  
})();
(function(){
  function checkPasswordComplexity(password)
  {
    let regex = new Regex('^(?=>*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');
    
  }
})();