
function showProductId()
{
    let  productId = 12345;

    function fix()
    {
        let productId = 46367;
        console.log("in fix: "+productId);
    }
    fix();
    
    console.log("in showProductId: "+productId);
}

showProductId();

