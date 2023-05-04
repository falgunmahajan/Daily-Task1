let sayHi=function greet(...names)
{
    names.forEach(name=>console.log('Hi '+name));
}
sayHi("Mary","John","James");
let sayHello=function greets(message,...names)
{
    console.log(message+" everyone!");
    names.forEach(name=>console.log('Hi '+name));
}
sayHello("Welcome","Mary","John","James");
function greet(person1,person2)
{
    console.log("Hello "+person1+" and "+person2);
}
let names=["john","Mary"];
greet(...names);

function display(char1, char2, char3, char4)
{
    console.log(char1, char2, char3, char4);
}
let letters="abcd";
display(...letters);


function display1(char1, char2, char3, char4, ...others)
{
    console.log(others);
    console.log(char1, char2, char3, char4, ...others);
}
let _letters="abcdefgh";
display1(..._letters);