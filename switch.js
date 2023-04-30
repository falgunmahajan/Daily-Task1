function simpleSwitch()
{
    let productId = 3;
    switch(productId)
    {
        default:
            console.log("Unknown Product");
            break;
        case 1:
            console.log("Product 1");
            break;
        case 2:
            console.log("Product 2");
            break;
        
    }
}
function multipleCase()
{
    let color="Red";
    switch(color)
    {
        case "Red":
        case "Pink":
            console.log("The color is red");
            break;
        case "Blue":
        case "Light Blue":
        case "Dark Blue":
            console.log("The color is blue");
        case "Gray":
        case "Grey":
            console.log("The color is grey");
            break;
        default:
            console.log("Unknown color");
            break;
    }
}
function forgetABreak()
{
    let productId = 2;
    switch(productId)
    {
        case 1:
            console.log("HL Road Frame=Black, 58");
            break;
        case 2:
            console.log("Sport-100 Helmet, Red");
        case 3:
            console.log("Mountain Bike Socks, M");
            break;
        default:
                console.log("Unknown Product");
                break;
    }
}
function strictComparison()
{
    let productId = "2";
    switch(productId)
    {
        case 1:
            console.log("HL Road Frame=Black, 58");
            break;
        case 2:
            console.log("Sport-100 Helmet, Red");
            break;
        case 3:
            console.log("Mountain Bike Socks, M");
            break;
        default:
                console.log("Unknown Product");
                break;
    }
}
