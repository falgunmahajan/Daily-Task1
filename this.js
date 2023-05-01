// //'use strict';
// console.log("Begin: global scope sample");
// console.log(this.toString());
// console.log("this === window="+(this === window).toString());
// console.log("End: global scope sample");

// (function()
// {
//     console.log(this.toString());
//     console.log("this === window="+(this === window).toString());
// })();
// function eventHandler(ctl)
// {
//     console.log(ctl.toString());
// }

    // let product = {
    //     productId : 680,
    //     name: "HL Road Frame=Black, 58",
    //     productNumber : "FR=R92B-58",
    //     color: "Black",
    //     standardCost:1059.31,
    //     listPrice:1431.50,
    //     grossProfit: function(){
    //         return(this.listPrice - this.standardCost).toLocaleString('en-US',{
    //         style:'currency', currency:"USD"});
    //     }
    // };
    // console.log(product.grossProfit());
    // let prod2 = 
    // {
    //     "standardCost" : 500,
    //     "listPrice":850
    // }
    // console.log(product.grossProfit.call(product));
    // console.log(product.grossProfit.call(prod2));
    // console.log(" ")
    // console.log(product.grossProfit.apply(product));
    // console.log(product.grossProfit.apply(prod2));
    function Product(id, name, cost, price)
    {
        this.productId = id;
        this.name = name;
        this.standardCost = cost;
        this.listPrice = price;
        this.grossProfit = function()
        {
            return(this.listPrice - this.standardCost).toLocaleString('en-US',{
            style:'currency', currency:"USD"});
        }
    }
    let prod1= new Product(680,"HL Road Frame=Black, 58",1059.31, 1431.50);
    let prod2 = new Product(707,"Sport-100 Helmet, Red",13.08, 34.99);
    console.log(prod1.grossProfit());
    console.log(prod2.grossProfit());