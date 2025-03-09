//Numbers

let veri;

//veri = Number("5");
//veri = parseInt("5"); //Number yerine parse da kullanılabilir.
//veri = parseFloat("5.3");
//veri = parseInt("5c");
//veri = isNaN("c5");
//veri = pisNaN("5");

var sayi = 15.634786398;
veri = sayi.toPrecision(5); //yukarıdA ki sayının ilk beş tanesi
veri = sayi.toFixed(6); // virgülden sonra ki ilk 6

veri = Math.PI;
veri = Math.round(3.5); // 3.14 ü yuvarla diyor. SOnuç 5 olur.
veri = Math.round(3.2); //3 olur cevap
veri = Math.ceil(3.2); //ceil her ne olursa olsun yukarıya yuvarlanır. Bu yüzden 3.2 bile olsa cevap 4 olur
veri = Math.floor(8.3); //hep aşağı yuvarlar. 3 cevap
veri = Math.pow(3,2); //3 ün karesi
veri = Math.sqrt(81); //81 in karekökü
veri = Math.abs(-50);// eksiyi artıya dönüştürür
veri = Math.min(7,6,3,9,2,3); //3
veri = Math.max(7,5,98,3,12,9); //98
veri = Math.random(); //sayfayı her yenilediğinde farklı bir sayı veriliyor
veri = Math.random()*10 // 0 dan 10 a kadar olan random sayılar.
veri = Math. floor(Math.random()); // tam sayılar olsun



console.log(veri);
console.log(typeof veri);