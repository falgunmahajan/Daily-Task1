let person1=
{
    Name:'Falgun',
    Age : 23
};
function getAge(location, gender)
{
    console.log(this.Age, location ,gender)
}
console.log('using call')
getAge.call(person1, 'Jammu', 'Female')
console.log('using apply')
getAge.apply(person1,['Jammu', 'Female'])
console.log('using bind')
let y = getAge.bind(person1,"Jammu","Female")
// y('Jammu', 'Female')
// y('Delhi','Female')
y()
