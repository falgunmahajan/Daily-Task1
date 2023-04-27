

let person = {
    name:'John',
    age:32,
    partTime:false,
    showInfo:function(name)
    {
        showMessage(name);
    }
};
// person.name="Falgun";
// person['age']=22
// showMessage(person.name+" "+person['age']);
person.showInfo(24);
changePercentOff(typeof person.showInfo)


