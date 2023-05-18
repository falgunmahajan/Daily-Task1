async function func()
{
    await setTimeout(()=>
    {
        console.log("Hello")
    },0);
    console.log("world")
}