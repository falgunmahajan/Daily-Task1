let click=document.getElementsByClassName("btn");
let count=Number.parseInt(document.getElementById("count").value);
function getCount(i)
{
    if(i==0)
    {
        count=count+1;  
    }
    else if(i==1)
    {
        count=count-1;
    }
    else
    {
        count=0;
    }
    document.getElementById("count").value = count;
}
