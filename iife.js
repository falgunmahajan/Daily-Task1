(function()
{
   console.log("Hello") ;
})();
let greeting=(function()
{
    let message = 'Hello';
    let getMessage = function()
    {
        return message;
    };
    return{
        getMessage:getMessage
    };
})();
console.log(greeting.getMessage());