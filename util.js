var obj= {
    person1:{
        Name:{
            firstName : "Falgun",
            lastName : "Mahajan"
        } 
    }
}
for(var i in obj)
{
    if(typeof obj[i] == "object")
    {
        for(var j in obj[i])
        {
            if(typeof obj[i][j]=="object")
            {
                for(var k in obj[i][j])
                {
                    console.log(obj[i][j][k])
                }
            }
        }
    }
}



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
