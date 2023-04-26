var num = 10;
var first = 0;
var second = 1;
console.log("The fibonacci series:");
console.log(first);
console.log(second);
for(var i=3; i<=num; i++)
{
    number = first+second;
    console.log(number);
    first=second;
    second=number;
    
}