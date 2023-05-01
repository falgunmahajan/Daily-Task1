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
// function throwError()
// {
//     let result;
// try{
//     result=x/10;
// }
// catch(error)
// {
//    throw{
//     "message":"In this the following error occured"+error.message,
//     "name":"CustomError"
//    };
// }
// }
// (function()
// {
//     try{
//         throwError();
//     }
//     catch(error)
//     {
//         console.log(error.message+ " -Error type" +error.name);
//     }
// })();
function handleError(error)
{
    switch(error.name)
    {
        case 'ReferenceError':
            console.log('Reference Error: '+error.message);
            break;
        case 'RangeError':
            console.log('Range Error: '+error.message);
            break;
        case 'TypeError':
            console.log('Type Error: '+error.message);
            break;
        case 'URIError':
            console.log('URI Error: '+error.message);
            break;
        case 'SyntaxError':
            console.log('Syntax Error'+error.message);
            break;
        case 'EvalError':
            console.log('Evaluation Error'+error.message);
            break;
        default:
            console.log('Error Type:' +error.name+" Message: "+error.message);
            break;
    }
};
function referenceError()
{
    let result;
    try{
        result = x/10;
    }
    catch (error)
    {
        handleError(error);
    }
}
function rangeError()
{
    let result = 0;
    try{
        result.toPrecision(200);
    }
    catch (error)
    {
        handleError(error);
    }
}
function typeError()
{
    let result = 0;
    try{
        result.toUpperCase();
    }
    catch (error)
    {
        handleError(error);
    }
}
function uriError()
{
    let uri = "http://www.netinc.com/path%%%/file name";
    try{
        decodeURI(uri);
    }
    catch (error)
    {
        handleError(error);
    }
}
function syntaxError()
{
    try{
        let sum = eval("alert('Hello)");
    }
    catch (error)
    {
        handleError(error);
    }
}
referenceError();
rangeError();
typeError();
uriError();
syntaxError();
