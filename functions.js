function greeting(name)
{
    console.log('Hello ' +name);
}
let name = "John";
greeting(name);
name="Mary";
greeting(name);
function greetingJohn()
{
    return "Hello John!";
}
let message=greetingJohn();
console.log(message);
function sum(num1, num2)
{
    return num1+num2;
}
let result=sum(2,3);
console.log(result);
function printAll()
{
    for(let i = 0; i<arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}
printAll(1,2,3,4,5);
printAll(10,20);