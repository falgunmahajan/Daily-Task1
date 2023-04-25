var num = prompt("Enter any number");
var sum=0;
while(num!=0)
{
    rem=num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
}
console.log("Sum of digits of a number:",sum);





