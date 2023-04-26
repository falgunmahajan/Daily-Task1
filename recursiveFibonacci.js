
console.log("The fibonacci series: ")
console.log(0);
console.log(1);
for(var i=2; i<10; i++)
{
    console.log(fibonacci(i));
}
function fibonacci(num)
{
    if(num==0)
    {
        return 0;
    }
    else if(num==1)
    {
        return 1;
    }
    else
    {
        return fibonacci(num-1) + fibonacci(num-2);
    }

}
