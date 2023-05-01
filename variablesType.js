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
let result;
let value = null;
console.log("_products = " +typeof _products);
console.log("product = " +typeof product);
console.log("product.productId = " +typeof product.productId);
console.log("product.productNumber = " +typeof product.productNumber);
console.log("strValue = " +typeof strValue);
console.log("introDate = " +typeof introDate);
console.log("isActive = " +typeof isActive);
console.log("result = " +typeof result);
console.log("value = " +typeof value);
console.log("typeOfSample() = " +typeof typeOfSample);
}
typeOfSample();