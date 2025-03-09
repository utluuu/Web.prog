// Date Object

let zaman = new Date();
let birthday = new Date(1998,4,12) //sonradan ekledik
//bunu, alta da yazdığımız console.log kısmından çıkarıp yaşımızı bulmak için yazdık.


//Set Method: Bunu ise değiştirmek istiyorsak kullanıyoruz.

zaman.setDate(25); //Örneğin get method ile ayın 3ü olduğunu öğrnei,dk ama set de ayın 3 ü değil 25 i olsun diye değiştirebiliyoruz
zaman.setMonth(3); 
zaman.setYear(2024); 
zaman.setHours(20); 

//Get methods: Bu method da şuanın zamanını, month, day öğreniyoruz.

console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());


console.log(zaman.getFullYear() - birthday.getFullYear());


console.log(zaman);
console.log(typeof zaman);