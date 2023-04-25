let num = prompt("Enter any number");
let count=0;
let arm=0;
let org=num;
while(org!=0)
{
    rem=org%10;
    count++;
    org=Math.floor(org/10);
}
org = num;
while(org!=0)
{
    rem=org%10;
    arm+=Math.pow(rem,count)
    org=Math.floor(org/10);
}
if(num==arm)
{
    console.log("Number is armstrong");
}
else{
    console.log("Number is not armstrong");
}