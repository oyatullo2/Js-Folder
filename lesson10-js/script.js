// const car={
//     name:"Equinox",
//     position:1,
//     color:'Black',
//     trueFalse:true,
// }
// if(car.trueFalse){
//     car.price='47.500$';
// }
// else{
//     car.color='None !';
//     car.price='None !';
//     car.position='None !'
// }
// for(let a in car){
//     console.log(a,car[a])
// }
// // console.log("Name : "+car.name,"Color : "+car.color,"Position : "+car.position,"True and False : "+car.trueFalse,"Price : "+car.price);


// const obect={
//     Name:'Oyatulloh',
//     Age:16,
//     Postal_code:22221,
// }
// for (let a in obect){
//     console.log(a,obect[a])
// }

const products={
    name : 'apple',
    price:prompt("Qancha bo'ldi : "),
}
if(products.price<=999.000 && products.price>=15.000 && products.price>0){
if(products.price<=100.000){
    let a=(products.price*7)/100; 
    let result=(products.price-a);
    let qoldiq1=result%2;
    if(result!=0 && qoldiq1.toString().length<2){
        console.log("Old price : "+products.price+" So'm"+`\n`+"New price : "+result+"00"+" So'm"+"\nDiscount : "+a+"00"+" So'm");
    }
    else{
        console.log("Old price : "+products.price+" So'm"+`\n`+"New price : "+result+"0"+" So'm"+"\nDiscount : "+a+'0'+" So'm");
    }
}
else if(products.price>=100.000 && products.price>10.000){
    let q=(products.price*10)/100;
    let result2=(products.price-q);
    let qoldiq2=result2%2;
    if(q.toString().length>3 && qoldiq2!=0){
    console.log(`Old price ${products.price} So'm\nNew price ${result2}00 So'm\nDiscount : ${q}`+'00'+" So'm");
    }
    else if(q.toString().length<3){
        console.log(`Old price ${products.price} So'm\nNew price ${result2}00 So'm\nDiscount : ${q}`+'000'+" So'm");
    }
}
}
else if(products.price>999.000){
    console.log(`Sizga belgilangan max miqdoq = 999.000 !\nSiz kiritgan miqdor ${products.price} belgilangan miqdordan ortiq son kiritdingiz !`);
}
else if(products.price<15.000 && products.price>0){
    let kamlik=(15.000-products.price);
    if(kamlik.toString().length<=2){
        console.log(`Sizga min miqdor 15.000 edi !\nSiz kiritgan miqdor ${products.price} bu juda oz !\nKirib yana ${kamlik}000 so'mlik narsa oling !`)
    }
    else{
        console.log(`Sizga min miqdor 15.000 edi !\nSiz kiritgan miqdor ${products.price} bu juda oz !\nKirib yana ${kamlik}00 so'mlik narsa oling !`)
    }
}
else if(products.price<=0){
    console.log(`Siz ${products.price} kiritdingiz va bu hato qayta urinib ko'ring !`);
}
