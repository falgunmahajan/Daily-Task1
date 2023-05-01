let _products = [{
    productId : 680,
    name: "HL Road Frame=Black, 58",
    productNumber : "FR=R92B-58",
    color: "Black",
    standardCost:1059.31,
    listPrice:1431.50
},
{
    productId : 707,
    name: "Sport-100 Helmet, Red",
    productNumber : "HL-U509-R",
    color: "Red",
    standardCost:13.08,
    listPrice:34.99
},
{
    productId : 709,
    name: "Mountain Bike Socks, M",
    productNumber : "S0-B909-M",
    color: "White",
    standardCost:3.3963,
    listPrice:9.50,
}
];
function typeOfSample()
{
let product = _products[0];
let introDate = new Date();
let strValue = new String();
let isActive = false;
console.log("_products = " + _products.constructor.toString());
console.log("product = " +product.constructor.toString());
console.log("product.productId = " +product.productId.constructor.toString());
console.log("product.productNumber = "+product.productNumber.constructor.toString());
console.log("strValue = " +strValue.constructor.toString());
console.log("introDate = " +introDate.constructor.toString());
console.log("isActive = "+isActive.constructor.toString());
console.log("typeOfSample() = " +typeOfSample.constructor.toString());
}
typeOfSample();

function helperFunction()
{
    let introDate = new Date();
    let result;
    let value = null;
    console.log("_products is Array?=" + isArray(_products));
    console.log("introDate is Date?=" + isDate(introDate));
    console.log("result=" + isNullOrUndefined(result)? 'Null/undefined': result);
    console.log("value=" + isNullOrUndefined(value)? 'Null/undefined': value);
    function isArray(value)
    {
        return value.constructor.toString().indexOf("Array")>-1;
    }
    function isDate(value)
    {
        return value.constructor.toString().indexOf("Date")>-1;
    }
    function isNullOrUndefined(value)
    {
        return value === null||value=== undefined;
    }
    
}
helperFunction();