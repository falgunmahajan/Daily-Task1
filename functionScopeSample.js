function greeting()
{
    let message = 'Hello';
    let sayHi = function()
    {
        console.log(message);
    }
    sayHi();
}
greeting();

function greet()
{
    let message = 'Hello';
    let sayHi = function()
    {
       let  message='Hi';
    }
    sayHi();
    console.log(message);
}

greet();
