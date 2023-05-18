fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((result)=>result.json()).then(record=>{
    for(var item in record)
    {
        document.write(item," : ",record[item],"<br>");
        
    }
})
