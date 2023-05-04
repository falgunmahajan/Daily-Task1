function introduction(name,profession)
{
    console.log("My Name is "+name+ " and I am a "+profession);
}
introduction("John", "Student");
introduction.apply(undefined,['Mary','Lawyer']);
introduction.call(undefined,'James','artist');

let person1={
    name:'Mary',
    getName:function()
    {
        return this.name;
    }
};
let person2={name:'John'} ;
let getNameCopy=person1.getName.bind(person2)
console.log(getNameCopy());