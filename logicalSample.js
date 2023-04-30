let price = 200;
if(price>10 && price<1600)
{
    console.log("price>10 && price<1600 is true");
}
if(price>10 && price<200)
{
    console.log("price>10 && price<200 is true");
}
else
{
    console.log("price>10 && price<200 is false");
}

if(price>10 || price<1600)
{
    console.log("price>10 || price<1600 is true");
}
if(price>10 || price>1600)
{
    console.log("price>10 || price>1600 is true");
}
if(!(price<10))
{
    console.log("!(price<10)  is true");
}
(function shortCircuiting()
{
    let result;
    console.log("");
    result=isColorRed("Black") && isGreaterThan1400(1401);
    console.log("");
    result=isGreaterThan1400(1401) && isColorRed("Black") ;
    console.log("");
    console.log("");
    result=isColorRed("Red") || isGreaterThan1400(200);
    console.log("");
    result=isGreaterThan1400(200) || isColorRed("Black") ;
})();
function isColorRed(value)
{
    console.log("In the isColorRed() function");
    return value === "Red";
}
function isGreaterThan1400(value)
{
    console.log("In the isGreaterThan1400() function");
    return value > 1400;
}
