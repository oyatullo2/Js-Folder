// let a=+prompt("A ga son yozing : ");
// let b=+prompt("B ga son yzoing : ");
// if(a>b){
//     document.write(`Siz kiritgan birinchi son ${a} va bu son ${b} dan katta !<br>Shu sabab natija yani ${a} ga 10 qo'shdik !<br> Narija : ${a+10}`);
// }
// else if(b>a){
//     document.write(`Siz kiritgan ikkinchi son ${b} va ${a} dan katta !<br>Shu sabab natijaga yani ${b} ga 5 qo'shdik !<br>Natija : ${b+5}`);
// }


// let a=Math.random()*10000;
// a=parseInt(a);
// // let b=a/100;
// // let d=b>0 & b<10;
// if(a<10000 & a>1000){
//     console.log("Taxminiy son 4 xonalik");
//     console.log(a);
// }
// else if(a>100 & a<1000){
//     console.log("Tahminiy son 3 xonalik")
//     console.log(a);
// }
// else if(a<100 & a>10){
//     console.log("Taxminiy son 2 xonalik")
//     console.log(a);
// }
// else if(a<10 & a>0){
//     console.log("Taxminiy son 1 xonalik son")
//     console.log(a);
// }

let a=(prompt("Birinchi sonni kiriting :"));
let b=(prompt("Ikkinchi sonni kiriting :"));
let natija1=(Math.abs(a-5));
let natija2=(Math.abs(b-5));

if(natija1<natija2){
    console.log(`${a} 5 ga yaqinroq`);
}
else if (natija2<natija1){
    console.log(`${b} 5 ga yaqinroq`);
}






