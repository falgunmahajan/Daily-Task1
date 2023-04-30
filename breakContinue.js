function breakSample()
{
    let products = [{
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
    for(const items of products)
    {
        if(items. standardCost<20)
        {
            break;
        }
        console.log(JSON.stringify(items));
    }
}
breakSample();
function continueSample()
{
    let products = [{
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
    for(const items of products)
    {
        if(items. standardCost>1000)
        {
            continue;
        }
        console.log(JSON.stringify(items));
    }
}
continueSample();