// "use strict"
// // document.write("Hello world");
// // console.log("Hello world");
// // prompt("Hello world");
// console.log(5);
// // alert("Hello world");
// var a = 5;
// console.log(a);
// let b = 6;
// console.log(b);
// const d = 24;
// document.write(d);
// console.log(d);
// alert(d);
// let q = "Oyatullo";


// Typeof yani malumot qaysi turda ekanini bilmoqchi bolsangiz ishlatasiz 
// console.log(typeof a);


// Ism familyani chiqarish uchun let ozgaruvchisiga qiymatlar berilyapdi va fam ozgaruvchisi ichiga (``) shu qiymat ichiga kerakli soz yoziladdi va va let malumot berilgan sozni ($) belgi va ({})va shu belgi ichida kerakli malumot turi chaqirib olinadi !
// let ism = "Oyatullo";
// let yosh = 16;
// let fam = `Ism familyam : Izzatullayev ${ism} va yoshim ${yosh} da`;
// console.log(fam);


// bu yerda let orgaruvchisiga a qiymat berilyapdi va a qiymat ichiga Math kutubxonasi chaqririlgan xuddi c++ dagi @include<cmath> kabi va pastdagi parseInt(a) bu random raqamlarni int yani butun son shaklida ko'rsatishga ishlab beryapdi men ozim documt.white bilan ishladi chunki menga jatija console.log da bo'lishi kerak emas edi
let a=Math.random()*101;
a=parseInt(a);
document.write(a);
console.log(a);


// math.round but kutobxona ortadan tepaga yoki pastga yaki misol 4.6 bolsa natija 5 boladi 4.5dan past bolsa yani 4.4 bolsa natija 4 chiqaradi 
// let a=Math.round(4.6);
// console.log(a);


// math ceil yani berilgan qiymatni doim tepaga tortadi hamttoki u 4.5 dan kichik bolsa ham
// let a=Math.ceil(4.2)
// console.log(a);


// math floor yani u doim pastga tortadi 4.9 bolsa ham
// let a=Math.floor(4.9);
// console.log(a);


// math pow kutubhonasi bu kutobhonaga don yoziladi va u sonlarning darajaga kotarib beradi maslan bu yerda 2 va 6 soni bor bu 2 ning 6 darajasini korsatadi yani 64ni!
// let a=Math.pow(2 ,6);
// console.log(a);


// math sqrt bu ildiz ostidan chiqarib beradi masalan bu yerda 49 soni bor bu 7 natijani beradi
// let a=Math.sqrt(49);
// console.log(a);

// let a = 4567;
// let b=parseInt(a/1000);
// let q=parseInt(a/100)%10;
// let w=parseInt(a/10)%10;
// let r=parseInt(a%10);
// let natija=`${a} soni   da ${b} ta minlik ${q} ta yuzlik ${w} ta o'nlik va ${r} ta birlik son bor`;

// document.write(natija);