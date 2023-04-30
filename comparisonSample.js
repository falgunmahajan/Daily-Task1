(function()
{
    let price = 200; 
    let result = 0;
    console.log("price = " + price.toString());

    //Equal to
    console.log("price == price = " + (price == price));

    //Equal to 
    result = price.toString();
    console.log("price(number) == result(string) = " + (price == result).toString());

    //Equal to/Equal type
    result=price;
    console.log("price(number) === result(number) = " + (price === result).toString());

    //Equal to/Equal type
    result = price.toString();
    console.log("price(number) === result(string) = " + (price === result).toString());

    //Not Equal to 
    result = 100;
    console.log("result = " + result.toString());
    console.log("price(number) != result(string) = " + (price != result).toString());

    //not Equal to/Not Equal type
    result = price.toString();
    console.log("price(number) !== result(string) = " + (price !== result).toString());

    //Greater than
    console.log("price>10="+ (price>10).toString());

    //Greater than or equal to
    console.log("price>=price="+ (price>=price).toString());

    //Less than
    console.log("price<1500="+ (price<1500).toString());

    //Less than or equal to
    console.log("price<=price="+ (price<=price).toString());

    //ternary 
    result=price<1500 ? "'less than 1500'" : "'greater than 1500'";
    console.log("ternary="+result);
    
})();