(function myFunc()
{
    var x=10;
    if(true)
    {
        var x="hello"
        console.log(x);
    }
    console.log(x);
})();
(function myFunc1()
{
    var x=10;
    if(true)
    {
        let x="hello"
        console.log(x);
    }
    console.log(x);
})();
(function myFunc2()
{
    var x=10;
    if(true)
    {
       const x="hello"
        console.log(x);
    }
    console.log(x);
})();
(function()
{
    if(true)
    {
        let y=3;
        console.log(y)
    }
    if(true)
    {
        let y=4;
        console.log(y)
    }
    if(true)
    {
        let y=6;
        y="hello"
        console.log(y)
    }
})();