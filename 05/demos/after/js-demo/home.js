const values=['a','b', 'c','d','e'];
const newValues=values.slice(1,3);
console.log(values);
values.splice(2,2,'f')
console.log(values);
console.log(values.indexOf('f'));