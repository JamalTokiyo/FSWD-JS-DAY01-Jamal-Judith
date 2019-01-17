var a= 7;
var b= 14;
var c= "21";
var d= '36';
var e= 42;

Number(c);

var result=a+b+ Number(c)+ Number(d)+e;


document.write("The sum is" + result);
document.write("<br>")
// Multiplication with string number

var f='1';
var g=15;
var h=8;
var i="1";

var multiResult= Number(f)*g*h*Number(i);
document.write("The multiplication those numer and stings are:" + ' ' + multiResult)
document.write("<br>")

var div=result+multiResult;

document.write("The division:" + div/2)