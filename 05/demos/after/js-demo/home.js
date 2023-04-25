var obj1={
    "Name":"Falgun",
    "location":{
        "city":"Jammu",
        "pincode":180001
    }
};

var obj2={
    "Name":"Falgun",
    "location":{
        "city":"Jammu",
        "pincode":180001
    }
};
var obj=[obj1,obj2]
for(var i of obj)
{
    for(var j in i)
    {

        if(typeof i[j]== "object")
        {
             
        for(var k in i[j])
        {
            if(k=="pincode")
            console.log(i[j][k])
        }
    }
        else
        {
        console.log(i[j])
       }
    }
}










// function showProductId(productId)
// {
//     let  productId = 12345;

//     function fix()
//     {
//         let productId = 46367;
//         console.log()
//     }
    
    
//     console.log(productId);
// }

// showProductId(125324);
// console.log(productId);
// let a=[{Name:"falgun"},{lastName:"Mahajan"}]
// for(var i of a)
// {
//     for(var j in i)
//     {
//         console.log(i[j]);
//     }
// }