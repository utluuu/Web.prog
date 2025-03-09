//Operatörler

let veri;
const a=20;
const b=10;
const c=5;
let d=3;

//1.Aritmetik operatörler

veri = a-b;
veri = a+b;
veri = a*b;
veri = a/b;
veri = d++;
veri = d--;
veri = --d;
veri = a%b;

//2.Atama Operatörleri

veri = a;
veri += a; // veri= veri + a;
veri -= a; // veri = veri- a
veri *= a; // veri = veri*a
veri %= a; // veri = veri % a (kalanını kastediyor(modunu alıyoruz))
veri /= a; // veri = veri/ a;

//3.Karşılaştırma Operatörleri

veri = a==b; //a ile b eşit mi? anlamına gelir. True yada false olarak değer çıkar. Booleandur
veri = 5==="5"; //== koysam sadece değerlere bakacaktı (5=5) ama === hem türlerine hem de sayısal değerlerine bakıyor ve true/false bir şey çıkıyıor.
veri = a!=b; //a b ye eşit dğeildir

//4.mantıksal Operatörler

//&& (and)
veri = (a>b) && (a>c)

// || (or)

veri = (b>a) || (a>c)

// ! Not

veri = !(a>b) // normalde a büyüktür b ama başında ki not ile olumsuza çeviriyor.

console.log(veri);
console.log(typeof veri);