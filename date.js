//Date Object

let zaman = new Date();
let birthday = new Date(2001,12,9); //Kendi yaşımı hesaplamak için yazdım.

// Set Methods

zaman.setDate(25);
zaman.setMonth(3);
//setFullYear(2024);
zaman.setHours(20);


//Get Methods

console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());

console.log(zaman.getFullYear() - birthday.getFullYear()) //Yaşımın Devamı.



console.log(zaman);
console.log(typeof zaman);