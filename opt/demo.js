'use strict'; 
(function() {
  function Person(firstName, lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;
    Object.defineProperty(this, 'fullName', {
    get : function(){
      return this.firstName+" "+this.lastName;
    },
    enumerable:true
  });
  }
 function Student(firstName, lastName, age)
 {
  Person.call(this, firstName,lastName,age)
  this.enrolledCourses=[],
  this.enroll=function(courseId)
  {
    this.enrolledCourses.push(courseId)
  };
  this.getCourses=function(){
    return this.fullName+ "'s enrolled courses are: "+ +this.enrolledCourses.join(',');
  };
 };
 display(Student.prototype.constructor)
 Student.prototype=Object.create(Person.prototype)
 display(Student.prototype.constructor)
 Student.prototype.constructor=Student;
 display(Student.prototype.constructor)
 let mayuri=new Student('Mayuri','Mahajan',25);
 display(mayuri);
 mayuri.enroll('CS205');
 mayuri.enroll('MA101');
 display(mayuri.getCourses())
 display(mayuri.__proto__);
 display(mayuri.__proto__.__proto__);
})();