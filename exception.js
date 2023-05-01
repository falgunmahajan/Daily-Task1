// (function()
// {
//     let result;
// try{
//     result=x/10;
// }
// catch(error)
// {
//     console.log(error.message);
// }
// })();
// (function()
// {
//     let result;

// try{
//     console.log(" ");
//     console.log("An error will occur.")
//     result=x/10;
//     console.log("This line will never run.")
// }
// catch(error)
// {
//     console.log("In the catch block "+error.message);
// }
// finally{
//     console.log("In  the finally block");
// }
// })();
// (function()
// {
//     let result;
//     let x=100;

// try{
//     console.log(" ");
//     console.log("An error won't  occur.")
//     result=x/10;
// }
// catch(error)
// {
//     console.log("In the catch block "+error.message);
// }
// finally{
//     console.log("In  the finally block");
// }
// })();
function throwError()
{
    let result;
try{
    result=x/10;
}
catch(error)
{
   throw{
    "message":"In this the following error occured"+error.message,
    "name":"CustomError"
   };
}
}
(function()
{
    try{
        throwError();
    }
    catch(error)
    {
        console.log(error.message+ " -Error type" +error.name);
    }
})();
