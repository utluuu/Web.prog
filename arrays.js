//Arrays

let names = ["arda","kerem","aslı","mert"];
let years = [1990,2007,1960,2005];
let mix = ["arda","yılmaz",1990,null,undefined["programlama,futbol"]];

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);  
console.log(mix);  

//get array item

console.log(names[0]); //0.eleman gelecek

//set item

names(0)="levent";
names[names.length]="mehmet";//dizinin içinde ki eleman sayısıı sayıp mehmeti ilave edecek. Bunu kullanmasının sebebi bazıları çok dizeli oluyor, sayılamayacak kadar. Bu yüzden length kullanıyouz
console.log(names); // arda ismini levent ile değitir anlamına geliyor


//add item

names.push("eda");
console.log(names); //eda ismini sona ekler

names.unshift("eda"); //eda ismini başa ekler
console.log(names);

//remove item


years.pop();
console.log(years); //dizi  içinde ki son indeksi siler

years.shift();
console.log(years); // başta ki elaman silinir.

//indexof

let index = names.indexOf("levent")
console.log("index:" + index); 

//reverse
names.reverse();
console.log(names); //sırayı tersten yazıyor


//sort sayılları küçükten büyüğe yada alfabatik
years.sort();
console.log(years); //1960,1990,2005,2007

//concat(birleştirme metodu)
let veri =names.concat(years);
console.log(veri);

names.splice(2,0,"ahmet"); //ikinci indexten başlayıp herhangi bir indexi silmeden ahmeti ekle diyor, ikinci indexe ahmet eklendi
console.log(names);

names.splice(2,1,"selin");
console.log(names); // 2.indexi silip o isim yerine selini yazdı.


