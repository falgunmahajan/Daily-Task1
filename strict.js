"use strict";
function strictSample()
{
result=100;
console.log(result);

let eval=10;
let arguments = "some args";

delete result;

delete strictSample;
}
strictSample();