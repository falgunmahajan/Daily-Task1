var arr=[5,8,3,9,2,6];
var loc=0;
function search(item)
{
    for (var el in arr)
    {
        if(arr[el]==item)
        {
            loc=el;
        }

    }
    if(loc==0)
    {
        console.log("item is not present");
    }
    else
    {
        console.log("item is present at: ", loc);
    }
}
search(9);