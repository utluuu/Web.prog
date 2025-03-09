//String

const firstname = "Ayşe";
const lastname = "Uzun"; //const sabit olarak kullanılıdı, değişken yok yani
const age = "37";
let hobbies = "formula1 sinema spor kitap yazılım";

let veri;

//string concatenations(birleşitme)

veri = firstname+" "+lastname; // Ayşe Uzun
veri = "Ayşe";
veri +=" Uzun";

veri = firstname.concat(' ',lastname);

veri = veri.toUpperCase(); // Tüm harfler büyük
veri = veri.toLowerCase(); //hepsi küçük

//veri = veri.substring(3,11);
//iksi aynı. Stringin 3. ve 11.cisi
//veri = veri.slice(1,8);

//veri = veri.indexOf("ş"); // cevap 2 olur

//veri = veri.indexOf("h"); //-1 çıkar çünkü  h yok

//veri = veri.replace("Ayşe", "Fatma"); // Değeri değiştirdik, fatma olarak

//veri = veri.length;//7

veri = hobbies.split('');//boşluk koymadığımız için, virgül koysaydık içine virgül koyacaktık


console.log(veri);
console.log(typeof veri);