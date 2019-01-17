console.log("my name is jamal ");
document.write("May name is Judith");
document.write("<br>");
// alert("Hi Jamal!!")

var age= 25;

console.log("my name is jamal " + age + "years old.");
var players=["Martin","Thomas","Peter","Mathias", "Nick"];
console.log("The most valuable player is "+ players[3]);

// creating variable with method sort():
 var carBrand=["Tesla","Audi","Renault","Volvo", "Mazda","Fiat", "Ferrari"];
console.log(carBrand.sort());
  // Variable with methods Pops and push, unshift shift 
  var fruits=["Apple","Banane","Kiwi"];
  fruits.push("Orange");
  console.log(fruits);

var fruits=["Apple","Banane","Kiwi" ,"Orange"];

  console.log(fruits.pop());  
  console.log(fruits);

// sort and add animal - intermediate exercise 2

var animals=["monkey","horse","dog"];

console.log(animals.sort());

animals.push("cat");
console.log(animals);
console.log(animals.sort());

// intermediate exercise 3

// var basket =[ "mango","cherries","kiwi","grapes","pear","peach","orange","lemon"];
// console.log(basket);

var b = "mango/cherries/kiwi/rapes/pear/peach/orange/lemon";
var temp = new Array();
temp = b.split('/');
document.write("/");





