let obj1={
    age:34
};
let obj2={
    age:25,
    getAge:function(location){
        console.log(this.age,location)
    }
};
function display()
{
    console.log(this.age);
}
// display.call(obj1)
// display.call(obj2)
// display.apply(obj1)
// display.apply(obj2)

let x = obj2.getAge.bind(obj1)

x('dasf')
let y=display.bind(obj1)
y()