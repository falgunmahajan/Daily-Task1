
(function () {
    let productNumber = "FR-R92B-58";
    let values = [...productNumber];
    console.log(values);
})();
(function () {
    let arr = [1, 2, 3];
    let arr2 = [...arr];
    arr2.push(4);
    arr2[0] = 99;
    console.log(arr);
    console.log(arr2);
})();

(function () {
    let products = [
        {
            productId: 680,
            name: "HL Road Frame=Black, 58",
            productNumber: "FR=R92B-58",
            color: "Black",
            standardCost: 1059.31,
            listPrice: 1431.50
        },
        {
            productId: 707,
            name: "Sport-100 Helmet, Red",
            productNumber: "HL-U509-R",
            color: "Red",
            standardCost: 13.08,
            listPrice: 34.99
        },
        {
            productId: 709,
            name: "Mountain Bike Socks, M",
            productNumber: "S0-B909-M",
            color: "White",
            standardCost: 3.3963,
            listPrice: 9.50,
        }
    ];
    let diff = [...products];
    diff[0].productId = 999;
    console.log(products[0].productId)
    console.log(diff[0].productId);
})();
(function () {
    let products = [
        {
            productId: 680,
            name: "HL Road Frame=Black, 58",
            productNumber: "FR=R92B-58",
            color: "Black",
            standardCost: 1059.31,
            listPrice: 1431.50
        },
        {
            productId: 707,
            name: "Sport-100 Helmet, Red",
            productNumber: "HL-U509-R",
            color: "Red",
            standardCost: 13.08,
            listPrice: 34.99
        },
        {
            productId: 709,
            name: "Mountain Bike Socks, M",
            productNumber: "S0-B909-M",
            color: "White",
            standardCost: 3.3963,
            listPrice: 9.50,
        }
    ];
    let newProducts = [{
        productId: 712,
        name: "AWC Logo Cap",
        productNumber: "CA-1098",
        color: "Multi",
        standardCost: 6.9223,
        listPrice: 8.99
    },
    {
        productId: 821,
        name: "Touring Front Wheel",
        productNumber: "FW-T905",
        color: "Black",
        standardCost: 96.7964,
        listPrice: 218.01,
    }
    ];
    let allProducts = products.concat(newProducts);
    console.log(allProducts.length);
    let spProducts = [...products, ...newProducts];
    console.log(spProducts.length);
})();
function spreadInConstructors() {
    let dt = new Date(2023, 5, 1);
    console.log(dt);
    let dateFields = [2023, 6, 1]
    dt = new Date(...dateFields);
    console.log(dt);
}
spreadInConstructors();
function spreadForFunctionArgs() {
    multipleParams(1, 2, 3);
    let args = [1, 2, 3];
    multipleParams(...args);
}
function multipleParams(arg1, arg2, arg3)
{
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}
spreadForFunctionArgs();
function objectLiterals()
{
    let product = {
        productId : 680,
        name: "HL Road Frame=Black, 58",
        productNumber : "FR=R92B-58",
        color: "Black",
        standardCost:1059.31,
        listPrice:1431.50
    };
    let prod2={...product};
    prod2.productId = 999;
    console.log(product);
    console.log(prod2);
    console.log(product.productId);
    console.log(prod2.productId);
}
objectLiterals();