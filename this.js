//'use strict';
console.log("Begin: global scope sample");
console.log(this.toString());
console.log("this === window="+(this === window).toString());
console.log("End: global scope sample");

(function()
{
    console.log(this.toString());
    console.log("this === window="+(this === window).toString());
})();
function eventHandler(ctl)
{
    console.log(ctl.toString());
}