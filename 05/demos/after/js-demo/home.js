let myFunction = function(message,firstName)
{
    console.log(message)
    console.log(firstName)
}
myFunction('Hello','Falgun');

let key = 42;
function getSecretCode(value)
{
    let keyGenerator = function()
    {
        let key=12;
        console.log("in keyGenertor:", key);
        return key
    }
    let code = value*keyGenerator();
    console.log("in getSecretCode:", key);
    return code;
}
let secretCode = getSecretCode(2)
showMessage(secretCode);

changePercentOff(50)
