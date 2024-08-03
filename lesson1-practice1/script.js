// function result(){
//     let son=5654;

//     let ming=parseInt(son/1000);
//     let yuz=parseInt(son/100)%10;
//     let on=parseInt(son/10)%10;
//     let bir=parseInt(son%10);

//     document.write(`${son} ichida ${ming} ta minglik ${yuz} ta yuzlik ${on} ta onlik ${bir} ta birlik bor`);
// };

let a=(prompt("Taxminiy son kiriting :"))
a=Number(a);
parseInt(a);
// birlik uchun
let w=a/1;
// o'nlik uchun 
let e=Math.floor(a/10);
let r=a%10;
// yuzlik uchun
let y=parseInt(a/100);
let u=Math.floor(a/10)%10;
let i=a%10;
// mingliklar uchun 
let z=parseInt(a/1000);
let x=parseInt(a/100)%10;
let c=parseInt(a/10)%10;
let v=parseInt(a%10);
if(a<5 & a>0){
    let q=`Siz yozgan son ${a} va siz yozgan son ichida ${w} ta 1 bor!`;
    document.write(q);
}
else if(a<0){
    document.write("EEE kimni aldamoqchisiz bu saytda musbat sonlar ishlamaydi !");
}
else if(a>5 & a<100){
    let t=`Siz yozgan son ${a} va siz yozgan sonda ${e} ta o'nlik va ${r} ta birlik son bor !`;
    document.write(t);
}
else if (a>99 & a<1000){
    let o=`Siz yozgan son ${a} va siz yozgan sonda ${y} ta yuzlik ${u} ta o'nlik ${i} ta birlik bor !`;
    document.write(o);
}
else if (a>999 & a<10000){
    let m=`Siz yozgan son ${a} va siz yozgan sonda ${z} ta minglik ${x} ta yuzlik ${c} ta o'nlik ${v} ta birlik bor! `;
    document.write(m);
}
else if (a===0){
    document.write("Iltimos 0 sonini kiritmang bu asli raqam ham emas !");
}
else if(a>9999){
    document.write("Bu sayt faqat 4 xonalik sonlarni qabul qiladi !");
}
else{
    document.write("Siz hali hech qanday raqam kiritmadingiz !");
}