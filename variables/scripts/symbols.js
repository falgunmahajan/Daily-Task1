var id=Symbol();
var id=Symbol("My Id");
console.log(id);
console.log(id.toString());
var id2 = Symbol("My Id");
console.log(id===id2);
var id3=Symbol.for("My Id");
var id4 = Symbol.for("My Id");
console.log(id3===id4);
var loan = {
    name:"Barry",
    [Symbol("income")]:15000
};
console.log(loan["name"]);
console.log(loan[Symbol.for("income")]);
console.log(Object.getOwnPropertyNames(loan));
console.log(Object.getOwnPropertySymbols(loan));