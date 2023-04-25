let arr=[3,6,8,7,13,98,76]
let evenCount=0;
let oddCount=0;
for(var el of arr)
{
    if(el%2==0)
    {
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log("Count of even Number: "+evenCount);
console.log("Count of even Number: "+oddCount);