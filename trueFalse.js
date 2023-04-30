let price=200;
let color="Red";
let result;
console.log("Check for 'true' values");
result = price>10;
console.log(result);
 
if(price>10)
{
    console.log("Price is >10");
}
if(price)
{
    console.log("Price is >0");
}

if(color)
{
    console.log("color has a value");
}

console.log("Check for 'false' values");
color=null;
console.log("color == null= "+Boolean(color));

color="";
console.log("color ==''= "+Boolean(color));
color=undefined;
console.log("color == undefined= "+Boolean(color));
let value;
console.log("'let value'= "+Boolean(color));
value=100/"test";
console.log("100/'test'= "+Boolean(color));