'use strict';

(function()
{
    let price = 200; 
    let result = 0;
    console.log("price = " + price.toString());

    //Addition
    result = price+100;
    console.log("price + 100 = " + result.toString());

    //Subtraction
    result = price-10;
    console.log("price - 10 = " + result.toString());

    //Multiplication
    result = price*2;
    console.log("price * 2 = " + result.toString());

    //Division
    result = price/2;
    console.log("price / 2 = " + result.toString());

    //Exponentiation
    result = price**2;
    console.log("price ** 2 = " + result.toString());

    // Modulus
    result = price%3;
    console.log("price %3  = " + result.toString());

    //Increment
    result = price++;
    console.log("result = price++ = " + result.toString());
    console.log("price = " + price.toString());
    result = ++price;
    console.log("result = ++price = " + result.toString());

    //Decrement
    result = price--;
    console.log("result = price-- = " + result.toString());
    console.log("price = " + price.toString());
    result = --price;
    console.log("result = --price = " + result.toString());
})();
(function()
{
    let price = 200; 
    let stringValue = "100";
    let result = 0;
    console.log("price = " + price.toString());
    result = price+stringValue;
    console.log("result (number+stringValue)=" +result.toString());
    result = price+(+stringValue);
    console.log("result (number+(+stringValue))=" +result.toString());
})();
(function()
{
    let price = 200; 
    
    console.log("price = " + price.toString());

    //Addition
    price +=100;
    console.log("price +=100 = " + price.toString());

    //Subtraction
    price -=100;
    console.log("price -=100 = " + price.toString());

    //Multiplication
    price *=2;
    console.log("price *=2= " + price.toString());

    //Division
    price /=2;
    console.log("price /=2 = " + price.toString());

    //Exponentiation
    price **=2;
    console.log("price ** 2 = " + price.toString());

    // Modulus
    price %=3;
    console.log("price %=3 = " + price.toString());
})();