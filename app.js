let chalk = require("chalk");
const gradient = require('gradient-string');
let  a = 5;
let name = "Mafioso";
let b = 10;
if(a==b)
{
    console.log("A equal to b");

}
else {
    let distance = Math.abs(a-b);
    console.log("A ("+a+ ") not equal to B ("+b+") with distance : "+ distance);
};

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(name[0]);

let myTable = [];
console.log(myTable);

let names = ["Mafioso","Enzos","Chris","Virgil"];
names.push("Mafioso");
names.push("Enzos");
console.log(names);
console.table(names);
let languages = ['HTML','CSS','JS'];

languages.forEach(lang => {
    console.log('language: '+ lang);
})

let personInfo = {
    name : "Mafioso",
    surname : "ynwa",
    email : "maf@maf.com",
    city : "Thessaloniki",
    country : "Greece"
};

console.log(gradient.rainbow("My name is " +personInfo.name + personInfo.surname + ", I'm from " +personInfo.city + ", " +personInfo.country + ", and my email is " + personInfo.email));

console.log(gradient('cyan', 'pink')("Hello World"));
