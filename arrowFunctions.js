let greetings=()=>"Hello world!";
let message=greetings();
console.log(message);


let greet=name=>"Hello"+name;
let message1=greet("John")
console.log(message1);


//add 2 no
let sum=(num1,num2)=>num1+num2;
console.log(sum(2,3));

let message2 = {
    name:'John',
    regularFunction :function(){
        console.log("Hello " +this.name);
    },
    arrowFunction:()=>console.log("Hi "+ this.name)
};
message2.regularFunction();
message2.arrowFunction();


function sayHi()
{
    console.log("Hi");
    console.log(this);
}
sayHi();

let greeting={};
greeting.sayHi=function()
{
    console.log("Hi");
    console.log(this);
}
greeting.sayHi()

function sayHi()
{
    console.log("Hi");
    console.log(this);
}
let greeting=new sayHi();