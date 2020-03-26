// // An array is a special variable, which can hold more than one value at a time.
// // Understanding the difference between let & var: It can be said that a variable declared with var is defined throughout the program (function scoped) as compared to let (which is block scoped). A function can contain many blocks.
// // watch later: https://www.youtube.com/watch?v=XgSjoHgy3Rk
//
// let namesArray = ['Kevin','McCoy','Emily','Frederic','Alisha','Ashli','Simon','Ty','Fiona','Prismo','Sammy','Caroline','Francesca','Karl','Esther','Irene','Martin','Yanxin','Katrina','Kiana'];
//
// function getRandom(max) {
//   return Math.floor(Math.random()* Math.floor(max))
// }
//
// // console.log(Math.random())
// //
// // console.log(getRandom(3))
// //
//
// let n = getRandom(namesArray.length)
// console.log(n)
//
// let randomName = namesArray[n];
// console.log(randomName)
//
// let arrayAsString = namesArray.join(", ")
// console.log(arrayAsString)
//
// let sortedNames = namesArray.sort();
// console.log(sortedNames);
//
// let text = "";
//
// // loops
//
// // i = index
// // i=0 means at the very beginning loop will begin;
//  // i<namesArray.length is when loop ends
//  // i++ is shorthand for increasing by 1
//
// for(i=0; i< namesArray.length; i++) {
//   text += namesArray[i] + "" + i +  "<br>";
// }
//
// $("#listNames").html(text);
//
// // shows random name on page
// $("#name").html(namesArray[n])
//
// $("#names").html(arrayAsString)
